import DashboardBreadcrumb from '@/components/layouts/Admin/DashboardBreadcrumb ';
import AdminSidebar from '@/components/layouts/Admin/admin-sidebar';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { IChildren } from '@/types';
import { Metadata } from 'next';

const AdminLayout = async ({ children }: IChildren) => {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <DashboardBreadcrumb />
          </div>
        </header>
        <>{children}</>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Dashboard | Aminul Islam',
};
// >> SEO End
