import Link from "next/link"
import { Show } from "../../interfaces/show"
import { Card } from "../Card"

interface GridContentProps {
    className?: string,
    shows: Show[]
    dataTestId?: string
}

const GridContent = (props: GridContentProps) => {
    const { className = "", shows, dataTestId } = props

    if (shows.length === 0) {
        return null
    }

    return (
        <main className={`grid-content ${className}`.trim()}>
            {shows.map((show, i) => (
                <Link key={show.id} href={`/details/${show.id}`} as="image">
                    {/* Priority=true if image is above the fold */}
                    <Card show={show} dataTestId={dataTestId} priority={i < 4} />
                </Link>
            ))}
        </main>
    )
}

export default GridContent