import { createRef } from "react"
import Link from "next/link"
import { useRouter } from 'next/router';
import { SearchInput } from "../SearchInput";
import { SmartImage } from "../SmartImage";

interface PageProps {
    isLoaded: boolean
}
const inputRef = createRef<HTMLInputElement>()

const Header = (props: PageProps) => {
    const router = useRouter();
    const { isLoaded } = props

    const handleOnSearch = (query?: string) => {
        if (query === "") {
            return
        }
        router.push(`/?query=${query}`)
    }

    const onKeyDown = async (value: string) => {
        handleOnSearch(value)
    }

    return (
        <header className={`header ${!isLoaded ? "header--full-height" : ""}`.trim()}>
            <div className="header__content">
                <Link href="/" aria-label="Gå till startsida" as="image">
                    <SmartImage width={139} height={44} alt="TV Maze's logo" src="/logo.png" />
                </Link>
                <div className="header__search-input-wrapper">
                    <SearchInput
                        className="header__search-input"
                        inputRef={inputRef}
                        handleOnSearch={onKeyDown}
                    />
                    <button type="button" className="header__cta-button" onClick={() => handleOnSearch(inputRef.current?.value)}>Search</button>
                </div>
            </div>
        </header>
    )
}

export default Header