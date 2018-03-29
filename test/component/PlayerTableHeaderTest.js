import React from "react";
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    findAllInRenderedTree,
    isDOMComponent,
    Simulate
} from "react-addons-test-utils";
import PlayerTable, {RATING, PLAYER, CLUB, POSITION} from "../../src/component/PlayerTable";
import {HEADER_CLASS_NAME} from "../../src/component/PlayerTableClassNamesGenerator";
import {playerDataID} from "../../src/component/PlayerTableIDGenerator";
import {ratings} from "../data/ratings";
import {empty_ratings} from "../data/empty-ratings";
import {state} from "../../src/reducer/Reducer";

let PlayerTableComponent;

const COLUMN_NO_FOR_RATING = 0;
const COLUMN_NO_FOR_PLAYER = 1;
const COLUMN_NO_FOR_CLUB = 2;
const COLUMN_NO_FOR_POSITION = 3;

describe('The table header ', () => {


    function findTableHeader() {

        let tableHeaders = [];

        findAllInRenderedTree(PlayerTableComponent, function (rowOfPlayerData) {

            if (typeof rowOfPlayerData.className !== "undefined" && rowOfPlayerData.className.indexOf(HEADER_CLASS_NAME) >= 0) {
                tableHeaders.push(rowOfPlayerData);
            }
        });

        return tableHeaders;
    }

    function assertThatColumnNumber(columnNo) {
        return {
            shouldBe: function (columnHeader) {
                expect($(findTableHeader()[columnNo]).html()).toBe(columnHeader);
            }
        }
    }

    function assertThatTableHeaderExist() {
        expect(findTableHeader().length).toBe(4);
    }

    let mockSortByRating;
    let sortedByRating = false;

    let mockSortByName;
    let sortedByName = false;

    let mockSortByClub;
    let sortedByClub = false;

    let mockSortByPosition;
    let sortedByPosition = false;

    beforeEach(() => {
        mockSortByRating = () => {
            sortedByRating = true
        };
        mockSortByName = () => {
            sortedByName = true
        };
        mockSortByClub = () => {
            sortedByClub = true
        };
        mockSortByPosition = () => {
            sortedByPosition = true
        };

        PlayerTableComponent = renderIntoDocument(<PlayerTable playerRatings={ratings.playerRatings}
                                                               sortByRating={mockSortByRating}
                                                               sortByName={mockSortByName}
                                                               sortByClub={mockSortByClub}
                                                               sortByPosition={mockSortByPosition}/>);
    });

    it('should have divs with ' + HEADER_CLASS_NAME + ' class', () => {
        assertThatTableHeaderExist();
    });

    it('1st column should be ' + RATING, () => {
        assertThatColumnNumber(COLUMN_NO_FOR_RATING).shouldBe(RATING);
    });

    it('2nd header column should be ' + PLAYER, () => {
        assertThatColumnNumber(COLUMN_NO_FOR_PLAYER).shouldBe(PLAYER);
    });

    it('3rd header column should be ' + CLUB, () => {
        assertThatColumnNumber(COLUMN_NO_FOR_CLUB).shouldBe(CLUB);
    });

    it('4th header column should be ' + POSITION, () => {
        assertThatColumnNumber(COLUMN_NO_FOR_POSITION).shouldBe(POSITION);
    });

    it('should render only a header when no players ratings is provided in a json file ', () => {

        PlayerTableComponent = renderIntoDocument(<PlayerTable playerRatings={empty_ratings.playerRatings}/>);
        assertThatTableHeaderExist();

        let divWithPlayerDataIDExist = false;

        findAllInRenderedTree(PlayerTableComponent, function (rowOfPlayerData) {

            if (typeof rowOfPlayerData.id !== "undefined" && rowOfPlayerData.id.indexOf(playerDataID()) >= 0) {
                divWithPlayerDataIDExist = true
            }
        });

        expect(divWithPlayerDataIDExist).toBeFalsy();
    });

    it("should sort entries by rating when rating header is clicked", () => {
        const header = findTableHeader()[COLUMN_NO_FOR_RATING];
        Simulate.click(header);
        expect(sortedByRating).toBeTruthy();

    });

    it("should sort entries by name when player header is clicked", () => {
        const header = findTableHeader()[COLUMN_NO_FOR_PLAYER];
        Simulate.click(header);
        expect(sortedByName).toBeTruthy();

    });

    it("should sort entries by club when club header is clicked", () => {
        const header = findTableHeader()[COLUMN_NO_FOR_CLUB];
        Simulate.click(header);
        expect(sortedByClub).toBeTruthy();

    });

    it("should sort entries by position when position header is clicked", () => {
        const header = findTableHeader()[COLUMN_NO_FOR_CLUB];
        Simulate.click(header);
        expect(sortedByClub).toBeTruthy();

    });


})