import {playerDecorator} from "../component/PlayerDecorator";

export const DESCENDING = "DESC";
export const ASCENDING = "ASC";

let sortOrder = DESCENDING;
let attributeToSortBy;

export class Sort {

    constructor(order, attribute) {
        sortOrder = order;
        attributeToSortBy = attribute;
    }

    compare(player1, player2) {

        const playerDecorator1 = playerDecorator(player1);
        const playerDecorator2 = playerDecorator(player2);

        if (playerDecorator1.getSortableProperty(attributeToSortBy) > playerDecorator2.getSortableProperty(attributeToSortBy)) {
            let value = (sortOrder === DESCENDING) ? -1 : 1;
            return value;
        }

        if (playerDecorator1.getSortableProperty(attributeToSortBy) < playerDecorator2.getSortableProperty(attributeToSortBy)) {
            let value = (sortOrder === DESCENDING) ? 1 : -1;
            return value;
        }

        return 0;

    }
}