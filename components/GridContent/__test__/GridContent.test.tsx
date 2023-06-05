import { render } from "@testing-library/react";
import { SearchResultOfFriends } from "../../../data/searchResultOfFriends";
import { GridContent } from "../../GridContent";

const cardsDataTestId = "test-article";

test("GridContent populates with cards", async () => {
    // Arrenge & Act
    const { getAllByTestId } = render(
        <GridContent
            dataTestId={cardsDataTestId}
            shows={SearchResultOfFriends}
        />
    );

    // Assert
    const cards = getAllByTestId(cardsDataTestId);
    expect(cards.length).toBe(SearchResultOfFriends.length);

    cards.forEach((card, index) => {
        const titleElement = card.querySelector(".card__name");
        expect(titleElement?.textContent).toBe(SearchResultOfFriends[index].name);
    });
});