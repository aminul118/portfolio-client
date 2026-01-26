import Profile from '@/components/modules/Public/profile/Profile';
import { getMe } from '@/services/user/users';

const ProfilePage = async () => {
  const { data } = await getMe();

  return (
    <>
      <Profile user={data} />
    </>
  );
};

export default ProfilePage;
