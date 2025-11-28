'use client';

import { Button } from '@/components/ui/button';
import { logOut } from '@/services/auth/logout';

const LogOut = () => {
  return <Button onClick={() => logOut()}>Logout</Button>;
};

export default LogOut;
