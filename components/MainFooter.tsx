import { NavGroupedItem, NavItem } from "@/types"
import Link from "next/link"
import { Checkmark, CheckmarkRounded } from "@/components/logos"
import { cn } from "@/lib/utils"

interface MainFooterProps {
    groups?: NavGroupedItem[]
    children?: React.ReactNode
}

export default function MainFooter({ groups, children }: MainFooterProps) {
    return (
        <footer className="pt-10 pb-16 text-sm leading-6">
            <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
                {groups?.length ? (
                    <div className="flex">
                        {groups?.map((group, index) => (
                            <div key={index} className="flex-none w-1/3 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
                                <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                                    {group.title}
                                </h2>
                                <ul className="mt-3 space-y-2">
                                    {group.items.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.disabled ? "#" : item.href}
                                                className={cn(
                                                    "hover:text-slate-900 dark:hover:text-slate-300",
                                                    item.disabled && "cursor-not-allowed opacity-80"
                                                )}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : null}
                <div className="mt-16 pt-10">
                    <div className="hidden items-center space-x-4 md:flex">
                        <CheckmarkRounded width={36} height={36} />
                        <span className="hidden font-heading text-2xl font-bold sm:inline-block">Pharmex</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}