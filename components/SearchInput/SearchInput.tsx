import { KeyboardEvent, RefObject } from "react"

interface SearchInputProps {
    inputRef: RefObject<HTMLInputElement>
    handleOnSearch: (value: string) => void
    className?: string
    dataTestId?: string
}

const SearchInput = (props: SearchInputProps) => {
    const { inputRef, handleOnSearch, className, dataTestId } = props

    const onKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") {
            return
        }
        handleOnSearch(inputRef.current?.value!)
    }

    return (
        <input
            className={className}
            data-testid={dataTestId}
            type='text'
            ref={inputRef}
            onKeyDown={onKeyDown}
            placeholder="Search for TV shows"
        />
    )
}

export default SearchInput