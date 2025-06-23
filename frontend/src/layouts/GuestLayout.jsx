import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Link, Navigate, Outlet } from "react-router-dom";
export default function GuestLayout(){
    const {token}=useStateContext();


    if(token){
        return <Navigate to="/"/>;
    }

    const navItems=[
        {path:'/inscription',name:'inscription'},
    ]
    return (
        <>
        <header className="w-[86%] mx-auto">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#ffffff] flex items-center justify-center shadow-md">
                <h1>Logo</h1>
            </div>
            <div className="hidden md:block">
            
            </div>
            </div>
            <div className="flex items-center gap-2">
            {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                <button className="flex items-center justify-center gap-2 text-[#ffffff] bg-[#333446] font-bold text-[12px] w-[130px] text-center h-[40px] rounded-full">
                    <span className="sm:inline">{item.name}</span>
                </button>
                </Link>
            ))}
            </div>
        </div>
        </header>
        <div>
            <Outlet/>
        </div>
        </>
    )
}