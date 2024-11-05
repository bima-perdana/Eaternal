import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/app/assets/logo-eaternal.png";
import Product from "@/app/assets/Product.png";
import Transaction from "@/app/assets/Transaction.png";




import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
 
// Menu items.
const items = [
  {
    title: "Transaction",
    url: "/dashboard/transaction",
    icon: Transaction,
  },
  {
    title: "Product",
    url: "/dashboard/product",
    icon: Product,
  },
]
 
export function AppSidebar() {
    return (
      <Sidebar className=""> 
        <SidebarContent className="flex w-full bg-gradient-to-b from-sidebar-primary-gradient to-sidebar-secondary-gradient 
        gap-10">
          <SidebarGroup className="">
            <SidebarGroupLabel className="w-full h-11 pr-5 pl-5">
                <Image src={Logo} alt='Logo Eaternal'/>
            </SidebarGroupLabel>
            <SidebarGroupContent className=" bg-red-500">
              <SidebarMenu className="flex gap-3">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="flex items-center p-2 text-white hover:bg-red-500">
                        <Image src={item.icon} alt={`${item.title} icon`} width={24} height={24} className="mr-2" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
  }
  