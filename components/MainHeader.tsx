"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import localFont from "next/font/local"
import { NavItem } from "@/types"
import { CheckmarkRounded } from "./logo"
import { cn } from "@/lib/utils"


interface MainHeaderProps {
    items?: NavItem[]
    children?: React.ReactNode
}

export function MainHeader({ items, children }: MainHeaderProps) {
    const segment = useSelectedLayoutSegment()

    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <CheckmarkRounded className="w-8 h-8" />
                <span className="hidden font-bold sm:inline-block">Pharmex</span>
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                {items?.map((item, index) => (
                    <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                        item.href.startsWith(`/${segment}`)
                        ? "text-foreground"
                        : "text-foreground/60",
                        item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    >
                    {item.title}
                    </Link>
                ))}
                </nav>
            ) : null}
        </div>
    )
}