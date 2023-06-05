import Head from "next/head"
import { Header } from "../Header"
import { ReactNode } from "react"

interface PageProps {
    children?: ReactNode,
    className?: string,
    isLoaded: boolean,
    title: string,
    description: string
}

const Page = (props: PageProps) => {
    const { children, className = "", isLoaded, title, description } = props

    return (
        <div className={`layout ${className}`.trim()}>
            <Head>
                <title>{`${title} | Tv Series Search Frontend`}</title>
                <meta name="description" content={`${description} | Tv Series Search Frontend`}></meta>
                <meta name="og:description" content={`${description} | Tv Series Search Frontend`}></meta>
                <meta name="twitter:description" content={`${description} | Tv Series Search Frontend`}></meta>
            </Head>
            <Header isLoaded={isLoaded} />
            {children}
        </div>
    )
}

export default Page