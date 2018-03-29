import React from "react";
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    findAllInRenderedTree,
    isDOMComponent
} from "react-addons-test-utils";
import PlayerTable,{
    RATING,
    PLAYER,
    CLUB,
    POSITION
} from "../../src/component/PlayerTable";
import {playerDecorator} from "../../src/component/PlayerDecorator";
import {
    PLAYER_RATING_ID_PREFIX,
    PLAYER_NAME_ID_PREFIX,
    PLAYER_CLUB_ID_PREFIX,
    PLAYER_POSITION_ID_PREFIX
} from "../../src/component/PlayerTableIDGenerator";
import {ratings} from "../data/ratings";


let PlayerTableComponent;

describe('A Player Table ', () => {

    function findPlayerEntry(index) {

        const playerRatings = ratings.playerRatings;
        return playerDecorator(playerRatings[index]);
    }

    beforeEach(() => {
        PlayerTableComponent = renderIntoDocument(<PlayerTable playerRatings={ratings.playerRatings}/>);
    });


    it('should render rating from the first entry to the last entry in the ratings.json', () => {
        let numberOfRankingInTheTable = 0;

        findAllInRenderedTree(PlayerTableComponent, function (rowOfPlayerData) {

            if (typeof rowOfPlayerData.id !== "undefined" && rowOfPlayerData.id.indexOf(PLAYER_RATING_ID_PREFIX) >= 0) {
                assertThat(rowOfPlayerData).hasSpanWithTitle(RATING).andText(findPlayerEntry(numberOfRankingInTheTable).getRating().toString());
                numberOfRankingInTheTable += 1;
            }
        });
        expect(numberOfRankingInTheTable).toBe(ratings.playerRatings.length);

    });

    it('should render names from the first entry to the last entry in the ratings.json', () => {


        let numberOfNamesInTheTable = 0;

        findAllInRenderedTree(PlayerTableComponent, function (rowOfPlayerData) {

            if (typeof rowOfPlayerData.id !== "undefined" && rowOfPlayerData.id.indexOf(PLAYER_NAME_ID_PREFIX) >= 0) {
                assertThat(rowOfPlayerData).hasSpanWithTitle(PLAYER).andText(findPlayerEntry(numberOfNamesInTheTable).getName());
                numberOfNamesInTheTable += 1;
            }
        });
        expect(numberOfNamesInTheTable).toBe(ratings.playerRatings.length);

    });

    it('should render club names from the first entry to the last entry in the ratings.json', () => {


        let numberOfClubNamesInTheTable = 0;

        findAllInRenderedTree(PlayerTableComponent, function (rowOfPlayerData) {

            if (typeof rowOfPlayerData.id !== "undefined" && rowOfPlayerData.id.indexOf(PLAYER_CLUB_ID_PREFIX) >= 0) {

                assertThat(rowOfPlayerData).hasSpanWithTitle(CLUB).andText(findPlayerEntry(numberOfClubNamesInTheTable).getClub());
                numberOfClubNamesInTheTable += 1;
            }
        });
        expect(numberOfClubNamesInTheTable).toBe(ratings.playerRatings.length);

    });

    it('should render player position from the first entry to the last entry in the ratings.json', () => {

        let numberOfPositionInTheTable = 0;

        findAllInRenderedTree(PlayerTableComponent, function (rowOfPlayerData) {

            if (typeof rowOfPlayerData.id !== "undefined" && rowOfPlayerData.id.indexOf(PLAYER_POSITION_ID_PREFIX) >= 0) {
                assertThat(rowOfPlayerData).hasSpanWithTitle(POSITION).andText(findPlayerEntry(numberOfPositionInTheTable).getPosition());
                numberOfPositionInTheTable += 1;
            }
        });
        expect(numberOfPositionInTheTable).toBe(ratings.playerRatings.length);

    });

    function assertThat(dom){
        return {
            hasSpanWithTitle: function(title){
                return {
                    andText: function(text) {
                        expect($(dom).find('span[title="' + title + '"]').html()).toBe(text);
                    }
                }
            }
        }
    }

})