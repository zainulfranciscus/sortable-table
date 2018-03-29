import ratings from "../ratings.json";
import {
    SORT_BY_RATING_ACTION_TYPE,
    SORT_BY_NAME_ACTION_TYPE,
    SORT_BY_CLUB_ACTION_TYPE,
    SORT_BY_POSITION_ACTION_TYPE
} from "../Action";
import {
    Sort,
    DESCENDING,
    ASCENDING} from "./Sort";
import {BY_RATING, BY_NAME, BY_CLUB, BY_POSITION} from '../component/PlayerDecorator';

const PLAYER_RATING_PROPS_NAME = "playerRatings";
const RATING_SORTING_ORDER_PROPS_NAME = "ratingSortingOrder";
const NAME_SORTING_ORDER_PROPS_NAME = "nameSortingOrder";
const CLUB_SORTING_ORDER_PROPS_NAME = "clubSortingOrder";
const POSITION_SORTING_ORDER_PROPS_NAME = "positionSortingOrder";

export function reducer(initialState, action) {
    switch (action.type) {

        case SORT_BY_RATING_ACTION_TYPE:
            let sortOrder = toggleSortOrder(action.playerData[RATING_SORTING_ORDER_PROPS_NAME]);
            let sort = new Sort(sortOrder, BY_RATING);
            let sortedData = [...(action.playerData.playerRatings)].sort(sort.compare);
            let newState = createState(sortedData).withRatingSortOrderProps(sortOrder);
            return newState;
        case SORT_BY_NAME_ACTION_TYPE:
            sortOrder = toggleSortOrder(action.playerData[NAME_SORTING_ORDER_PROPS_NAME]);
            sort = new Sort(sortOrder, BY_NAME);
            sortedData = [...(action.playerData.playerRatings)].sort(sort.compare);
            newState = createState(sortedData).withNameSortingOrderProps(sortOrder);
            return newState;
        case SORT_BY_CLUB_ACTION_TYPE:
            sortOrder = toggleSortOrder(action.playerData[CLUB_SORTING_ORDER_PROPS_NAME]);
            sort = new Sort(sortOrder, BY_CLUB);
            sortedData = [...(action.playerData.playerRatings)].sort(sort.compare);
            newState = createState(sortedData).withClubSortingOrderProps(sortOrder);
            return newState;
        case SORT_BY_POSITION_ACTION_TYPE:
            sortOrder = toggleSortOrder(action.playerData[POSITION_SORTING_ORDER_PROPS_NAME]);
            sort = new Sort(sortOrder, BY_POSITION);
            sortedData = [...(action.playerData.playerRatings)].sort(sort.compare);
            newState = createState(sortedData).withPositionSortingOrderProps(sortOrder);
            return newState;
        default:
            return ratings;
    }
}

export function createState(playerData){

    let props = {};
    props[PLAYER_RATING_PROPS_NAME] = playerData;

    return {
        withRatingSortOrderProps: function(order){
            props[RATING_SORTING_ORDER_PROPS_NAME] = order;
            return props;
        },
        withNameSortingOrderProps: function(order){
            props[NAME_SORTING_ORDER_PROPS_NAME] = order;
            return props;
        },
        withClubSortingOrderProps: function(order){
            props[CLUB_SORTING_ORDER_PROPS_NAME] = order;
            return props;
        },
        withPositionSortingOrderProps: function(order){
            props[POSITION_SORTING_ORDER_PROPS_NAME] = order;
            return props;
        }
    }
}

function toggleSortOrder(order) {
    if (typeof order === "undefined" || order === ASCENDING) {
        return DESCENDING;
    } else {
        return ASCENDING;
    }
}