import {Sort, DESCENDING, ASCENDING} from "../../src/reducer/Sort";
import {BY_RATING, BY_NAME, BY_CLUB, BY_POSITION, playerDecorator} from "../../src/component/PlayerDecorator";
import {ratings} from "../data/sort-test-data";

describe('Sort ', () => {

    const playerWithHighestRating = playerDecorator(ratings.playerRatings[1]);
    const playerWithLowestRating = playerDecorator(ratings.playerRatings[0]);

    it('should return player\'s rating in descending order ', () => {
        let sort = new Sort(DESCENDING, BY_RATING);
        let sortedData = [...(ratings.playerRatings)].sort(sort.compare);
        expect(playerWithHighestRating.getRating()).toBe(playerDecorator(sortedData[0]).getRating());
        expect(playerWithLowestRating.getRating()).toBe(playerDecorator(sortedData[1]).getRating());
    });

    it('should return player\'s rating in ascending order ', () => {
        let sort = new Sort(ASCENDING, BY_RATING);
        let sortedData = [...(ratings.playerRatings)].sort(sort.compare);
        expect(playerWithLowestRating.getRating()).toBe(playerDecorator(sortedData[0]).getRating());
        expect(playerWithHighestRating.getRating()).toBe(playerDecorator(sortedData[1]).getRating());
    });

    const patrickDangerfield = playerDecorator(ratings.playerRatings[0]);
    const marcusBontempelli = playerDecorator(ratings.playerRatings[1]);

    it('should return player\'s name in descending order ', () => {
        let sort = new Sort(DESCENDING, BY_NAME);
        let sortedData = [...(ratings.playerRatings)].sort(sort.compare);
        expect(patrickDangerfield.getName()).toBe(playerDecorator(sortedData[0]).getName());
        expect(marcusBontempelli.getName()).toBe(playerDecorator(sortedData[1]).getName());
    });

    it('should return player\'s name in ascending order ', () => {
        let sort = new Sort(ASCENDING, BY_NAME);
        let sortedData = [...(ratings.playerRatings)].sort(sort.compare);
        expect(marcusBontempelli.getName()).toBe(playerDecorator(sortedData[0]).getName());
        expect(patrickDangerfield.getName()).toBe(playerDecorator(sortedData[1]).getName());
    });

    const geelongCats = playerDecorator(ratings.playerRatings[0]);
    const westernBulldogs = playerDecorator(ratings.playerRatings[1]);

    it('should return club name in ascending order', () => {
        let sort = new Sort(ASCENDING, BY_CLUB);
        let sortedData = [...(ratings.playerRatings)].sort(sort.compare);
        expect(geelongCats.getClub()).toBe(playerDecorator(sortedData[0]).getClub());
        expect(westernBulldogs.getClub()).toBe(playerDecorator(sortedData[1]).getClub());
    });

    it('should return club name in ascending order', () => {
        let sort = new Sort(DESCENDING, BY_CLUB);
        let sortedData = [...(ratings.playerRatings)].sort(sort.compare);
        expect(westernBulldogs.getClub()).toBe(playerDecorator(sortedData[0]).getClub());
        expect(geelongCats.getClub()).toBe(playerDecorator(sortedData[1]).getClub());
    });

    const midfielder = playerDecorator(ratings.playerRatings[0]);
    const forward = playerDecorator(ratings.playerRatings[1]);

    it('should return position in ascending order', () => {
        let sort = new Sort(ASCENDING, BY_POSITION);
        let sortedData = [...(ratings.playerRatings)].sort(sort.compare);
        expect(forward.getPosition()).toBe(playerDecorator(sortedData[0]).getPosition());
        expect(midfielder.getPosition()).toBe(playerDecorator(sortedData[1]).getPosition());
    });

    it('should return position in ascending order', () => {
        let sort = new Sort(DESCENDING, BY_POSITION);
        let sortedData = [...(ratings.playerRatings)].sort(sort.compare);
        expect(midfielder.getPosition()).toBe(playerDecorator(sortedData[0]).getPosition());
        expect(forward.getPosition()).toBe(playerDecorator(sortedData[1]).getPosition());
    });
});