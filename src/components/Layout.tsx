import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-950">

      {mobileSidebarOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-label="Close navigation"
        />
      )}

      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">

        <Header
          onMenuClick={() =>
            setMobileSidebarOpen(true)
          }
        />

        <main className="flex-1 px-4 pb-8 pt-[97px] md:px-6">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>

      </div>

    </div>
  );
}

export default Layout;