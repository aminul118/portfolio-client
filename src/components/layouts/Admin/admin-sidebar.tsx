import { adminSidebarMenu } from '@/components/layouts/Admin/admin-menu';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Logo from '../../../assets/Logo';
import LogOut from './LogOut';
import Menu from './Menu';

const AdminSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader>
        <Link href="/admin" className="py-4">
          <Logo />
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {/* Sidebar Menu */}
        <Menu menuData={adminSidebarMenu} />
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter className="py-6">
        <Separator className="mb-2" />
        {/* <FooterUser /> */}
        <LogOut />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminSidebar;
