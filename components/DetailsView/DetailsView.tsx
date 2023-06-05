import { Cast, Show } from "../../interfaces/show"
import { Stars } from "../Stars"
import { Cast as CastComponent } from "../Cast"
import { SmartImage } from "../SmartImage"

interface CardProps {
    show: Show,
    cast: Cast[]
}

const DetailsView = (props: CardProps) => {
    const { show, cast } = props
    return (
        <main className='details-view'>
            <SmartImage className="details-view__image" height={470} width={320} src={show.image?.original} alt={show.name} />
            <section className="details-view__details">
                <h1 className="details-view__details__name">{show.name}</h1>
                <Stars amount={Math.round(show.rating.average)} />
                {show.genres.length > 0 && (
                    <p>
                        <span className="title">Genres:</span>
                        {" "}
                        {show.genres.join(" | ")}
                    </p>
                )}
                <div
                    className="details-view__details__summary"
                    dangerouslySetInnerHTML={{ __html: show.summary }}
                />
            </section>
            <CastComponent cast={cast} />
        </main>
    )
}

export default DetailsView