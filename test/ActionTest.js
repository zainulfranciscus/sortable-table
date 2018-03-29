import {
	SORT_BY_RATING_ACTION_TYPE,
	SORT_BY_NAME_ACTION_TYPE,
	SORT_BY_CLUB_ACTION_TYPE,
	SORT_BY_POSITION_ACTION_TYPE,
	sortByRating,
	sortByName,
	sortByClub,
	sortByPosition
} from '../src/Action';

import ratings from "./data/ratings";

describe('Action  ', () => {
        
    it('should return ' + SORT_BY_RATING_ACTION_TYPE + ' action type to sort table entry by ratings ', () => {
        let sortByRatingAction = sortByRating(ratings);
        expect(sortByRatingAction.type).toBe(SORT_BY_RATING_ACTION_TYPE);
        expect(sortByRatingAction.playerData).toBe(ratings);
    });

    it('should return ' + SORT_BY_NAME_ACTION_TYPE + ' action type to sort table entry by name ', () => {
        let sortByNameAction = sortByName(ratings);
        expect(sortByNameAction.type).toBe(SORT_BY_NAME_ACTION_TYPE);
        expect(sortByNameAction.playerData).toBe(ratings);
    });

    it('should return ' + SORT_BY_CLUB_ACTION_TYPE + ' action type to sort table entry by club ', () => {
        let sortByClubAction = sortByClub(ratings);
        expect(sortByClubAction.type).toBe(SORT_BY_CLUB_ACTION_TYPE);
        expect(sortByClubAction.playerData).toBe(ratings);
    });

     it('should return ' + SORT_BY_POSITION_ACTION_TYPE + ' action type to sort table entry by position ', () => {
        let sortByPositionAction = sortByPosition(ratings);
        expect(sortByPositionAction.type).toBe(SORT_BY_POSITION_ACTION_TYPE);
        expect(sortByPositionAction.playerData).toBe(ratings);
    });


});