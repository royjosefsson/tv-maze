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
            {shows.map(show => (
                <Link key={show.id} href={`/details/${show.id}`}>
                        <Card show={show} dataTestId={dataTestId} />
                </Link>
            ))}
        </main>
    )
}

export default GridContent