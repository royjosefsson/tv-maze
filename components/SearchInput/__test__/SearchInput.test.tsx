import { createRef } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchInput from "../SearchInput";
import { SearchResultOfFriends } from "../../../data/searchResultOfFriends";

const searchInputDataTestId = "search-input";

test("SearchInput triggers successful search", async () => {
    // Arrange
    const searchRequestMock = jest.fn().mockResolvedValue(SearchResultOfFriends);
    const inputRef = createRef<HTMLInputElement>();

    // Act
    const { getByTestId } = render(
        <SearchInput
            dataTestId={searchInputDataTestId}
            inputRef={inputRef}
            handleOnSearch={searchRequestMock}
        />
    );
    const inputElement = getByTestId(searchInputDataTestId) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Friends" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    // Assert
    await waitFor(() => {
        expect(searchRequestMock).toHaveBeenCalledWith("Friends");
    });
});
