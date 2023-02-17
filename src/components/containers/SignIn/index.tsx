import { useForm, useFormFieldsSchema, useRedirect, useToggle, useYupSchema } from '@/hooks';
import { Form } from '@/components/UI/organisms';
import { FormItem } from '@/components/UI/molecules';
import { Button, Input, InputPassword, Link } from '@/components/UI/atoms';
import { useCallback } from 'react';
import { tokenService } from '@/services';
import { webRoutes } from '@/settings';
import { authenticationService } from '@/api';
import { SignInFC, SignInForm } from './types';
import { Wrapper } from './styles';

const SignIn: SignInFC = () => {
  const [form] = useForm<SignInForm>();
  const [loading, toggleLoading] = useToggle();
  const redirect = useRedirect();
  const { requiredEmail, requiredString } = useFormFieldsSchema();

  const schema = useYupSchema({
    email: requiredEmail,
    password: requiredString,
  });

  const onClick = useCallback(() => {
    (async () => {
      try {
        toggleLoading();

        await form.validateFields();

        const user = form.getFieldsValue();
        const { data } = await authenticationService.signIn(user);

        if (!data) {
          return;
        }

        tokenService.set.verification(data.verificationToken);

        redirect(webRoutes.public.VERIFY_CODE);
      } catch (e) {
        console.error(e);
      } finally {
        toggleLoading();
      }
    })().catch(console.error);
  }, [form, redirect, toggleLoading]);

  return (
    <Wrapper title="Sign in form">
      <Form form={form} layout="vertical" disabled={loading}>
        <FormItem name="email" schema={schema} label="Email">
          <Input placeholder="Enter email" />
        </FormItem>
        <FormItem name="password" schema={schema} label="Password">
          <InputPassword placeholder="Enter password" />
        </FormItem>
        <Button onClick={onClick}>Sign in</Button>
      </Form>
      <br />
      Have not an account? <Link href={webRoutes.public.SIGN_UP}>Sign up</Link>
    </Wrapper>
  );
};

export default SignIn;
