
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarPanel from "./SidebarPanel";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectDarkMode, toggleDarkMode } from "@/store/darkModeSlice";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import type { LayoutContextType } from "./types";


const Layout = () => {
  const darkmode = useAppSelector(selectDarkMode)
  const dispatch = useAppDispatch()
  const [breadcrumb, setBreadcrumb] = useState<string[]>(["Dashboard"]);
  const context: LayoutContextType = { setBreadcrumb };
  return (
    <SidebarProvider>
      <SidebarPanel />
      <SidebarInset>
        <header className="flex h-16 shrink-0 pr-8 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumb.map((item, index) => (
                  <BreadcrumbItem key={index}>
                    {index === breadcrumb.length - 1 ? (
                      <BreadcrumbPage>{item}</BreadcrumbPage>
                    ) : (
                      <>
                        <BreadcrumbLink href="#">{item}</BreadcrumbLink>
                        <BreadcrumbSeparator />
                      </>
                    )}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <Button variant={"outline"} onClick={() => dispatch(toggleDarkMode())}>
            {darkmode ? <Sun /> : <Moon />}
          </Button>
        </header>
        <Outlet context={context} />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;