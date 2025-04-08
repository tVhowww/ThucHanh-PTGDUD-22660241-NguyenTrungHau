import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";

function Layout() {
  return (
    <div className="flex">
      <aside className="w-[250px] bg-white shadow-sm">
        <Menu />
      </aside>

      <main className="flex flex-col flex-1">
        <header className="shadow-sm bg-white">
          <Header />
        </header>

        <section className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout;
