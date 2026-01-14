import { AppSidebar } from "@/components/app-sidebar";
import { CalendarProvider } from "@/components/event-calendar/calendar-context";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <CalendarProvider>{children}</CalendarProvider>
      </SidebarInset>
    </SidebarProvider>
  );
}
