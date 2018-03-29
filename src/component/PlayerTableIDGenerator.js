export const PLAYER_RATING_ID_PREFIX = "player-rating-";
export const PLAYER_NAME_ID_PREFIX = "player-name-";
export const PLAYER_DATA_ID_PREFIX = "player-data-";
export const PLAYER_CLUB_ID_PREFIX = "player-club-";
export const PLAYER_POSITION_ID_PREFIX = "player-position-";


export function playerPositionID(index) {
    return PLAYER_POSITION_ID_PREFIX + index;
}

export function playerRatingID(index) {
    return PLAYER_RATING_ID_PREFIX + index;
}

export function playerNameID(index) {
    return PLAYER_NAME_ID_PREFIX + index;
}

export function playerDataID(index) {
    return PLAYER_DATA_ID_PREFIX + index;
}

export function clubID(index) {
    return PLAYER_CLUB_ID_PREFIX + index;
}