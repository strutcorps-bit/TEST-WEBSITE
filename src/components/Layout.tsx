import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export default function Layout() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
