const COLUMS = "columns";
const SMALL_12 = "small-12";
const PLAYER_ROW = "player-row";
const HIDE_IN_MOBILE_CLASS = "hide-for-small-only";

export const RATING_COLUMN_CLASSES = SMALL_12 + " medium-1 " + COLUMS;
export const HIDE_IN_DESKTOP_CLASS = "show-for-small-only";
export const MEDIUM_3_COLUMN_CLASSES = SMALL_12 + " medium-3 " + COLUMS;
export const MEDIUM_4_COLUMN_CLASSES = SMALL_12 + " medium-4 " + COLUMS;
export const RATING_BOX_CLASS_NAME ="ratingBox";
export const HEADER_CLASS_NAME = "header";
export const GRADIENT_CLASS = "gradient";
export function medium4Columns(){
    return playerDataColumnClasses(MEDIUM_4_COLUMN_CLASSES);
}

export function medium3Columns(){
    return playerDataColumnClasses(MEDIUM_3_COLUMN_CLASSES);
}

export function playerDataColumnClasses(columnClasses){
    return PLAYER_ROW + " " + columnClasses;
}

export function ratingHeaderClassNames(){
    return headerClassNames(RATING_COLUMN_CLASSES);
}

export function ratingColumnClasses(){
    return PLAYER_ROW + " " + RATING_COLUMN_CLASSES;
}

export function medium3Header(){
    return headerClassNames(MEDIUM_3_COLUMN_CLASSES);
}

export function medium4Header(){
    return headerClassNames(MEDIUM_4_COLUMN_CLASSES);
}

export function headerClassNames(columnClasses){
    return HEADER_CLASS_NAME + " " + columnClasses + " " + HIDE_IN_MOBILE_CLASS;
}

export function applyGradientOn2ndRows(index) {
    if (index % 2 > 0) {
        return " " + GRADIENT_CLASS;
    } else {
        return "";
    }
}