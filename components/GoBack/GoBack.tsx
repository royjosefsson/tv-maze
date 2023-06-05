import { LeftArrow } from "../../asserts"

interface GoBackProps {
    onClick?: () => void
}

const GoBack = (props: GoBackProps) => {
    const { onClick } = props

    const handleOnClick = () => {
        onClick?.()
    }

    return (
        <button className='go-back' onClick={handleOnClick}>
            <LeftArrow className="go-back__svg" />
            <span className="go-back__message">Back to search results</span>
        </button>
    )
}

export default GoBack