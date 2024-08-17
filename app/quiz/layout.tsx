import SideNav from "@/components/ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="">
          <SideNav children = {children} />
      </div>
    );
  }