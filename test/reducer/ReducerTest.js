import {reducer, createState} from "../../src/reducer/Reducer";
import {
    playerDecorator,
    BY_NAME,
    BY_RATING,
    BY_CLUB,
    BY_POSITION
} from "../../src/component/PlayerDecorator";
import {
    Sort,
    DESCENDING,
    ASCENDING
} from "../../src/reducer/Sort";
import {
    sortByRating,
    sortByName,
    sortByClub,
    sortByPosition
} from "../../src/Action";
import {ratings} from "../data/ratings";

describe('Reducer ', () => {
    it("should return all entries from ratings.json by default ", () => {

        const data = reducer(ratings, {type:'default'});
        const keys = Object.keys(data.playerRatings);
        const expectedKeys = Object.keys(ratings.playerRatings);

        expect(keys.length).toEqual(expectedKeys.length);
        expect(keys.toString()).toEqual(expectedKeys.toString());
    });

    it("should return ratings in descending order when action is sortByRating", () => {

        const data = reducer(ratings, sortByRating(ratings));
        const sort = new Sort(DESCENDING, BY_RATING);
        const sortedRatings = ratings.playerRatings.sort(sort.compare);

        assertThat(data.playerRatings).isEqualTo({
            data: sortedRatings,
            propertyToCompareWith: BY_RATING
        })


    });

    it("should return ratings with descending order when data is sorted in ascending order", () => {

        const currentRatingSortOrder = ASCENDING;
        const payload = createState(ratings.playerRatings).withRatingSortOrderProps(currentRatingSortOrder);
        const data = reducer(ratings, sortByRating(payload));

        const sort = new Sort(DESCENDING, BY_RATING);
        const sortedRatings = ratings.playerRatings.sort(sort.compare);

        assertThat(data.playerRatings).isEqualTo({
            data: sortedRatings,
            propertyToCompareWith: BY_RATING
        })

    });

    it("should return player name\'s in descending order when action is sortByName", () => {
        const data = reducer(ratings, sortByName(ratings));
        const sort = new Sort(DESCENDING, BY_NAME);
        const sortedNames = ratings.playerRatings.sort(sort.compare);

        assertThat(data.playerRatings).isEqualTo({
            data: sortedNames,
            propertyToCompareWith: BY_NAME
        })

    });

    it("should return player names with descending order when  data is sorted in ascending order", () => {

        const currentNameSortOrder = ASCENDING;
        const payload = createState(ratings.playerRatings).withNameSortingOrderProps(currentNameSortOrder);
        const data = reducer(ratings, sortByName(payload));

        const sort = new Sort(DESCENDING, BY_NAME);
        const sortedNames = ratings.playerRatings.sort(sort.compare);

        assertThat(data.playerRatings).isEqualTo({
            data: sortedNames,
            propertyToCompareWith: BY_NAME
        })

    });

    it("should return club names in descending order when action is sortByClub", () => {
        const data = reducer(ratings, sortByClub(ratings));
        const sort = new Sort(DESCENDING, BY_CLUB);
        const sortedClubs = ratings.playerRatings.sort(sort.compare);

        assertThat(data.playerRatings).isEqualTo({
            data: sortedClubs,
            propertyToCompareWith: BY_CLUB
        })

    });

    it("should return club names with descending order when data is sorted in ascending order", () => {

        const currentClubSortingOrder = ASCENDING;
        const payload = createState(ratings.playerRatings).withClubSortingOrderProps(currentClubSortingOrder);
        const data = reducer(ratings, sortByClub(payload));

        const sort = new Sort(DESCENDING, BY_CLUB);
        const sortedClubs = ratings.playerRatings.sort(sort.compare);

        assertThat(data.playerRatings).isEqualTo({
            data: sortedClubs,
            propertyToCompareWith: BY_CLUB
        })

    });

    it("should return player\'s position in descending order by default", () => {
        const data = reducer(ratings, sortByPosition(ratings));
        const sort = new Sort(DESCENDING, BY_POSITION);
        const sortedPlayerPositions = ratings.playerRatings.sort(sort.compare);

        assertThat(data.playerRatings).isEqualTo({
            data: sortedPlayerPositions,
            propertyToCompareWith: BY_POSITION
        })

    });

    it("should return player\'s position with descending order when data is sorted in ascending order", () => {

        const currentPositionSortingOrder = ASCENDING;
        const payload = createState(ratings.playerRatings).withPositionSortingOrderProps(currentPositionSortingOrder);
        const data = reducer(ratings, sortByPosition(payload));

        const sort = new Sort(DESCENDING, BY_POSITION);
        const sortedPositions = ratings.playerRatings.sort(sort.compare);

        assertThat(data.playerRatings).isEqualTo({
            data: sortedPositions,
            propertyToCompareWith: BY_POSITION
        })

    });

    function assertThat(data) {

        return {
            isEqualTo: function (anotherListOfData) {
                expect(data.length).toBe(anotherListOfData.data.length);

                for (let i = 0; i < data.length; i++) {
                    let property1 = playerDecorator(data[i]).getSortableProperty(anotherListOfData.propertyToCompareWith);
                    let property2 = playerDecorator(anotherListOfData.data[i]).getSortableProperty(anotherListOfData.propertyToCompareWith);
                    expect(property1).toBe(property2);
                }
            }
        }
    }
});