import { NavGroupedItem, NavItem } from "@/types";

export const MainHeaderItems: NavItem[] = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" }
]

export const MainFooterGroupedItems: NavGroupedItem[] = [
    {
        title: "Main",
        items: [
            { title: "About", href: "/about" },
            { title: "Services", href: "/services" },
            { title: "Contact", href: "/contact" }
        ]
    },
    {
        title: "Pharmacovigilance",
        items: [
            { title: "Medicine Registration", href: "/" },
            { title: "Safety in Post-Marketing Surveillance", href: "/" },
            { title: "Service Request", href: "/" },
        ]
    },
    {
        title: "On Social Media",
        items: [
            { title: "Facebook", href: "/" },
            { title: "Twitter", href: "/" },
            { title: "Linkedin", href: "/" },
        ]
    }
]