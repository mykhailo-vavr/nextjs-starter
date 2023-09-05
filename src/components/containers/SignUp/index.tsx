'use client';

import { useForm, useFormFieldsSchema, useRedirect, useToggle, useYupSchema } from '@/hooks';
import { Form } from '@/components/UI/organisms';
import { FormItem } from '@/components/UI/molecules';
import { Button, Input, InputPassword } from '@/components/UI/atoms';
import { useCallback } from 'react';
import { webRoutes } from '@/settings';
import { authenticationService } from '@/api';
import { SignUpFC, SignUpForm } from './types';
import { Wrapper } from './styles';

const SignUp: SignUpFC = () => {
  const [form] = useForm<SignUpForm>();
  const [loading, toggleLoading] = useToggle();
  const redirect = useRedirect();

  const { requiredEmail, requiredString, requiredOnlyLetters } = useFormFieldsSchema();

  const schema = useYupSchema({
    firstName: requiredOnlyLetters,
    lastName: requiredOnlyLetters,
    email: requiredEmail,
    phone: requiredString,
    password: requiredString,
  });

  const onClick = useCallback(() => {
    (async () => {
      try {
        toggleLoading();

        await form.validateFields();

        const user = form.getFieldsValue();
        const { data } = await authenticationService.signUp(user);

        if (!data) {
          return;
        }

        redirect(webRoutes.public.SIGN_IN);
      } catch (e) {
        console.error(e);
      } finally {
        toggleLoading();
      }
    })().catch(console.error);
  }, [form, redirect, toggleLoading]);

  return (
    <Wrapper title="Sign up form">
      <Form form={form} layout="vertical" disabled={loading}>
        <FormItem name="firstName" schema={schema} label="First name">
          <Input placeholder="Enter first name" />
        </FormItem>
        <FormItem name="lastName" schema={schema} label="Last name">
          <Input placeholder="Enter last name" />
        </FormItem>
        <FormItem name="email" schema={schema} label="Email">
          <Input placeholder="Enter email" />
        </FormItem>
        <FormItem name="phone" schema={schema} label="Phone">
          <Input placeholder="Enter phone" />
        </FormItem>
        <FormItem name="password" schema={schema} label="Password">
          <InputPassword placeholder="Enter password" />
        </FormItem>
        <Button onClick={onClick}>Sign up</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
