export const SORT_BY_RATING_ACTION_TYPE = 'BY_RATING';
export const SORT_BY_NAME_ACTION_TYPE= 'BY_NAME';
export const SORT_BY_CLUB_ACTION_TYPE='BY_CLUB';
export const SORT_BY_POSITION_ACTION_TYPE='BY_POSITION';

export function sortByRating(data){
	return {
		type: SORT_BY_RATING_ACTION_TYPE,
		playerData: data
	}
}

export function sortByName(data){
	return {
		type: SORT_BY_NAME_ACTION_TYPE,
		playerData: data
	}
}

export function sortByClub(data){
	return {
		type:SORT_BY_CLUB_ACTION_TYPE,
		playerData: data
	}
}

export function sortByPosition(data){
	return {
		type:SORT_BY_POSITION_ACTION_TYPE,
		playerData: data
	}
}
