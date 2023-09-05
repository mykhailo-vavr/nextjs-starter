'use client';

import { useForm, useFormFieldsSchema, useRedirect, useToggle, useYupSchema } from '@/hooks';
import { Form } from '@/components/UI/organisms';
import { FormItem } from '@/components/UI/molecules';
import { Button, Input } from '@/components/UI/atoms';
import { useCallback } from 'react';
import { tokenService } from '@/services';
import { authenticationService } from '@/api';
import { webRoutes } from '@/settings';
import { useUserContext } from '@/context/user';
import { VerifyCodeFC, VerifyCodeForm } from './types';
import { Wrapper } from './styles';

const VerifyCode: VerifyCodeFC = () => {
  const [form] = useForm<VerifyCodeForm>();
  const [loading, toggleLoading] = useToggle();
  const redirect = useRedirect();
  const { setUserState } = useUserContext();

  const { requiredString } = useFormFieldsSchema();

  const schema = useYupSchema({
    code: requiredString,
  });

  const onClick = useCallback(() => {
    (async () => {
      try {
        toggleLoading();

        await form.validateFields();

        const token = tokenService.decode.verification();
        const { code } = form.getFieldsValue();

        if (!token?.user?.email) {
          return;
        }

        const { data } = await authenticationService.verifyCode({
          code,
          email: token.user.email,
        });

        if (!data) {
          return;
        }

        tokenService.set.access(data.accessToken);
        tokenService.set.refresh(data.refreshToken);
        tokenService.remove.verification();
        await setUserState();

        redirect(webRoutes.private.PROFILE);
      } catch (e) {
        console.error(e);
      } finally {
        toggleLoading();
      }
    })().catch(console.error);
  }, [form, redirect, setUserState, toggleLoading]);

  return (
    <Wrapper title="Verify code form">
      <Form form={form} layout="vertical" disabled={loading}>
        <FormItem name="code" schema={schema} label="Code">
          <Input placeholder="Enter code" />
        </FormItem>
        <Button onClick={onClick}>Verify code</Button>
      </Form>
    </Wrapper>
  );
};

export default VerifyCode;
