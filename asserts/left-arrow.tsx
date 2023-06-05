interface LeftArrowProps {
    className?: string
}

const LeftArrow = (props: LeftArrowProps) => {
    const { className } = props
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path id="primary" d="M21,11H5.41l1.3-1.29A1,1,0,0,0,5.29,8.29l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z" />
        </svg>
    )
}

export default LeftArrow