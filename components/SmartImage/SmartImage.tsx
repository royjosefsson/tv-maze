import Image from "next/image"

interface SmartImageProps {
    className?: string;
    height: number;
    width: number;
    alt: string;
    src?: string;
}

const SmartImage = (props: SmartImageProps) => {
    const { height, width, alt, src, className } = props

    return (
        <Image
            className={className}
            height={height}
            width={width}
            alt={alt}
            src={src || "/error-image.png"}
        />
    )
}

export default SmartImage