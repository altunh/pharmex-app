export type NavItem = {
    title: string
    description?: string
    href: string
    disabled?: boolean
}

export type NavGroupedItem = {
    title: string
    description?: string
    href?: string
    items: NavItem[]
    disabled?: boolean
}