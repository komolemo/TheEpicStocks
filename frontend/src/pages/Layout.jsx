// Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };
    return (
        <main className="h-screen flex flex-col w-full pt-[74px]">
            <div className="flex flex-1 overflow-auto">
                <div className='w-54 h-full'/>
                <Outlet /> {/* 各ページのコンテンツがここに差し込まれる */}
            </div>
        </main>
    )
};

export default Layout;