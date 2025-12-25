'use client';

import { Button } from '@/components/ui/button';
import { logOut } from '@/services/auth/logout-user';

import { useState } from 'react';

const LogOut = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logOut();
    } catch {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleLogout} disabled={loading}>
      {loading ? <>Logging out...</> : <>Logout</>}
    </Button>
  );
};

export default LogOut;
