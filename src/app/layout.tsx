import { CalendarProvider } from "@/components/event-calendar/calendar-context";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "isolate min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CalendarProvider>{children}</CalendarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
