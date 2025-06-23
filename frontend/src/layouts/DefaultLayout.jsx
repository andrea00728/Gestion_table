import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Link, Navigate, Outlet } from "react-router-dom";
import profil from "../assets/little-girl-6746693_1280.jpg";

export default function DefaultLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/Pagepublic" />;
  }

  const navItems = [
    { path: "/accueil", name: "Accueil" },
    { path: "/evenement", name: "Evenement" },
    { path: "/apropos", name: "A propos" },
  ];

  return (
    <>
      <header className="w-[86%] mx-auto">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="w-10 h-10 bg-[#ffffff] flex items-center justify-center shadow-md">
            <h1>Logo</h1>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center gap-4 text-[#336666]">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="hover:underline">
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <img
              src={profil}
              alt="Profil"
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}