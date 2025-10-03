// 'use client';

// import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from '@/components/ui/sidebar';
// import { AppDataContext } from '@/context/auth-context';
// import { authApi, useLogoutMutation } from '@/redux/features/auth/auth.api';
// import { useAppDispatch } from '@/redux/hook';
// import { Gauge, LogOut } from 'lucide-react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useContext } from 'react';
// import { toast } from 'sonner';
// import DashboardThemeToggle from './dashboard-theme-toggle';

// export function FooterUser() {
//   const { isMobile } = useSidebar();
//   const dispatch = useAppDispatch();
//   const [logout, { isLoading }] = useLogoutMutation();
//   const router = useRouter();
//   const context = useContext(AppDataContext);

//   if (!context) {
//     throw new Error('AppDataContext must be used within AppDataProvider');
//   }
//   const userData = context.userData;

//   //   User Log out Handler
//   const handleLogout = async () => {
//     try {
//       const res = await logout(undefined).unwrap();
//       dispatch(authApi.util.resetApiState());
//       toast.success(res.message);
//       router.push('/login');
//     } catch {
//       toast.error('Log out failed..');
//     }
//   };

//   return (
//     <SidebarMenu>
//       <SidebarMenuItem>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <SidebarMenuButton
//               size="lg"
//               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//             >
//               <Avatar className="h-8 w-8 rounded-lg bg-slate-800">
//                 <AvatarImage
//                   src={userData?.picture ? userData?.picture : '/profile.jpg'}
//                   alt={userData?.fullName}
//                 />
//                 <AvatarFallback className="rounded-lg">CN</AvatarFallback>
//               </Avatar>
//               <div className="grid flex-1 text-left text-sm leading-tight">
//                 <span className="truncate font-medium">
//                   {userData?.fullName}
//                 </span>
//                 <span className="text-muted-foreground truncate text-xs">
//                   {userData?.email}
//                 </span>
//               </div>
//             </SidebarMenuButton>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="w-(--radix-dropdown-menu-trigger-width) min-w-64 rounded-lg"
//             side={isMobile ? 'bottom' : 'right'}
//             align="end"
//             sideOffset={4}
//           >
//             <DropdownMenuLabel className="p-0 font-normal">
//               <div className="flex flex-col items-center justify-center gap-2 px-1 py-1.5 text-center text-sm">
//                 <Avatar className="h-20 w-20 rounded-full bg-slate-800">
//                   <AvatarImage
//                     src={userData?.picture ? userData?.picture : '/profile.jpg'}
//                     alt={userData?.fullName}
//                   />
//                   <AvatarFallback className="rounded-lg">CN</AvatarFallback>
//                 </Avatar>
//                 <div className="grid flex-1 text-sm leading-tight">
//                   <span className="truncate font-medium">
//                     {userData?.fullName}
//                   </span>
//                   <span className="text-muted-foreground truncate text-xs">
//                     {userData?.email}
//                   </span>
//                 </div>
//                 <Button>View Profile</Button>
//               </div>
//             </DropdownMenuLabel>
//             <DropdownMenuSeparator className="mt-3" />
//             <DashboardThemeToggle />
//             <DropdownMenuSeparator />

//             <DropdownMenuGroup>
//               <DropdownMenuItem>
//                 <Gauge /> <Link href="/admin">Dashboard</Link>
//               </DropdownMenuItem>
//             </DropdownMenuGroup>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem onClick={handleLogout} disabled={isLoading}>
//               {isLoading ? (
//                 <>
//                   <ButtonSpinner /> Log out
//                 </>
//               ) : (
//                 <>
//                   <LogOut /> Log out
//                 </>
//               )}
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   );
// }
