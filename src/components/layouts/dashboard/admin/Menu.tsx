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
import { MenuGroup } from '@/types';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface MenuProps {
  menuData: MenuGroup[];
}

const Menu = ({ menuData }: MenuProps) => {
  return (
    <>
      {menuData.map((group, gi) => (
        <SidebarGroup key={gi}>
          {group.title && <SidebarGroupLabel>{group.title}</SidebarGroupLabel>}

          <SidebarMenu>
            {group.menu.map((menu, i) => {
              const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;

              if (!hasSubMenu) {
                // Single menu item
                return (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton asChild>
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
                <Collapsible key={i} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <div>
                          {menu.icon && <menu.icon />}
                          <span>{menu.name}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {menu.subMenu?.map((subItem, j) => (
                          <SidebarMenuSubItem key={j} className="text-sm">
                            <SidebarMenuSubButton asChild>
                              <Link
                                href={subItem.url}
                                className="block rounded px-2 py-1"
                              >
                                {subItem.name}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
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
