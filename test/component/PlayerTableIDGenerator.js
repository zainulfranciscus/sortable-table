import  {
	PLAYER_RATING_ID_PREFIX,
	PLAYER_NAME_ID_PREFIX,
	PLAYER_CLUB_ID_PREFIX,
	PLAYER_POSITION_ID_PREFIX,
	playerRatingID,
	playerNameID,
	clubID,
	playerPositionID
} from '../../src/component/PlayerTableIDGenerator';

describe('PlayerTableIDGenerator ', () => {
        
    
    it('should return ' + PLAYER_RATING_ID_PREFIX + ' as a prefix for every ID on rating column in player table' , () => {
        let index = 0;
        expect(playerRatingID(index)).toBe(PLAYER_RATING_ID_PREFIX + index);        
    });

    it('should return ' + PLAYER_NAME_ID_PREFIX + ' as a prefix for every ID on name column in player table' , () => {
        let index = 0;
        expect(playerNameID(index)).toBe(PLAYER_NAME_ID_PREFIX + index);        
    });

    it('should return ' + PLAYER_CLUB_ID_PREFIX + ' as a prefix for every ID on club column in player table' , () => {
        let index = 0;
        expect(clubID(index)).toBe(PLAYER_CLUB_ID_PREFIX + index);        
    });

    it('should return ' + PLAYER_POSITION_ID_PREFIX + ' as a prefix for every ID on position column in player table' , () => {
        let index = 0;
        expect(playerPositionID(index)).toBe(PLAYER_POSITION_ID_PREFIX + index);        
    });
});