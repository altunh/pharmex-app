import Image, { ImageProps } from "next/image";

interface LogoProps {
    className?: string
    width: number
    height: number
}

export function CheckmarkRounded(props: LogoProps) {
    return <Image {...props} src="/logos/checkmark-rounded.svg" alt="" />
}

export function Checkmark(props: LogoProps) {
    return <Image {...props} src="/logos/checkmark.svg" alt="" />
}