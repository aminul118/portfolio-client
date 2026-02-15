'use client';

import { adminSidebarMenu } from '@/components/layouts/Admin/admin-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();
  const menuData = adminSidebarMenu;

  const isLinkActive = (url: string) => {
    if (url === '/admin') {
      return pathname === '/admin';
    }
    return pathname === url || pathname.startsWith(`${url}/`);
  };

  return (
    <>
      {menuData.map((group, gi) => (
        <SidebarGroup key={gi}>
          {group.title && <SidebarGroupLabel>{group.title}</SidebarGroupLabel>}

          <SidebarMenu>
            {group.menu.map((menu, i) => {
              const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;
              const active = isLinkActive(menu.url);

              if (!hasSubMenu) {
                // Single menu item
                return (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton asChild isActive={active}>
                      <Link href={menu.url}>
                        {menu.icon && <menu.icon />}
                        <span>{menu.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }

              // Collapsible menu
              return (
                <Collapsible
                  key={i}
                  className="group/collapsible"
                  defaultOpen={active}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild isActive={active}>
                        <div>
                          {menu.icon && <menu.icon />}
                          <span>{menu.name}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {menu.subMenu?.map((subItem, j) => {
                          const subActive = isLinkActive(subItem.url);
                          return (
                            <SidebarMenuSubItem key={j} className="text-sm">
                              <SidebarMenuSubButton
                                asChild
                                isActive={subActive}
                              >
                                <Link
                                  href={subItem.url}
                                  className="block rounded px-2 py-1"
                                >
                                  {subItem.name}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
};

export default Menu;
