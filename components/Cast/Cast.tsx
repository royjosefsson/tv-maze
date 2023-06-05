import { Cast } from "../../interfaces/show"
import { SmartImage } from "../SmartImage"

interface CastProps {
    cast: Cast[]
}

const Cast = (props: CastProps) => {
    const { cast } = props
    if (cast.length === 0) {
        return null
    }
    return (
        <section className="cast">
            <h2 className="title">Cast</h2>
            <div className="cast__grid">
                {cast.map((x) => (
                    <article key={x.character.id} className="cast__card">
                        <SmartImage height={90} width={64} src={x.person.image?.medium} alt={x.character.name} />
                        <div className="cast__card__text">
                            <div className="title">{x.person.name}</div>
                            <div className="small">
                                as
                                {" "}
                                {x.character.name}</div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Cast