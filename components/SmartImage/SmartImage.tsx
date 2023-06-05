import Image from "next/image"

interface SmartImageProps {
    className?: string;
    height: number;
    width: number;
    alt: string;
    src?: string;
    priority?: boolean
}

const SmartImage = (props: SmartImageProps) => {
    const { height, width, alt, src, className, priority } = props

    return (
        <Image
            className={className}
            height={height}
            width={width}
            alt={alt}
            priority={priority}
            src={src || "/error-image.png"}
        />
    )
}

export default SmartImage