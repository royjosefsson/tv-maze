import { Show } from "../../interfaces/show"
import { Stars } from "../Stars"
import { SmartImage } from "../SmartImage"

interface ShowCardProps {
    show: Show,
    className?: string
    dataTestId?: string
    priority?: boolean
}

const Card = (props: ShowCardProps) => {
    const { show, className = "", dataTestId, priority } = props
    return (
        <article className={`card ${className}`.trim()} data-testid={dataTestId}>
            <div>
                <SmartImage
                    className="card__image"
                    height={295}
                    width={210}
                    src={show.image?.medium}
                    alt={show.name}
                    priority={priority}
                />
                <div className="card__name">{show.name}</div>
                <Stars amount={Math.round(show.rating.average)} />
            </div>
        </article>
    )
}

export default Card