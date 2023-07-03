import MainFooter from "@/components/MainFooter";
import { MainHeader } from "@/components/MainHeader";
import { MainFooterGroupedItems, MainHeaderItems } from "@/config/nav";
import React from "react";

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                 <div className="flex h-20 items-center justify-between py-6">
                    <MainHeader items={MainHeaderItems} />
                 </div>
            </header>
            <main className="flex-1">
                {children}
            </main>
            <MainFooter groups={MainFooterGroupedItems} />
        </div>
    )
}