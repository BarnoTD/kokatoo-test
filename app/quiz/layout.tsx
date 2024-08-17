import SideNav from "@/components/ui/sidenav";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Kokatoo',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="">
          <SideNav>
            {children}
          </SideNav> 
      </div>
    );
  }