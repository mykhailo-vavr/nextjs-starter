'use client';

import { useUser } from '@/hooks';
import { Descriptions } from '@/components/UI/molecules';
import { DescriptionsItem } from '@/components/UI/atoms';
import { formatDate } from '@/utils';
import { ProfileFC } from './types';
import { Wrapper } from './styles';

const Profile: ProfileFC = () => {
  const user = useUser();

  return (
    <Wrapper>
      <Descriptions title="Profile info" layout="vertical">
        <DescriptionsItem label="First name">{user.firstName}</DescriptionsItem>
        <DescriptionsItem label="Last name">{user.lastName}</DescriptionsItem>
        <DescriptionsItem label="Email">{user.email}</DescriptionsItem>
        <DescriptionsItem label="Phone">{user.phone}</DescriptionsItem>
        <DescriptionsItem label="Created at">{formatDate(user.createdAt, 'yearMonthDay')}</DescriptionsItem>
      </Descriptions>
    </Wrapper>
  );
};

export default Profile;
