import {playerDecorator, IS_UNKNOWN} from "../../src/component/PlayerDecorator";
import {ratings} from "../data/ratings";

describe('Player Decorator ', () => {

    it('should return a player name followed by surname ', () => {
        const player = playerDecorator(ratings.playerRatings[0]);
        expect(player.getName()).toBe(player.getPlayerNames().givenName + " " + player.getPlayerNames().surname);
    });

    it('should return a player surname if given name is empty', () => {
        const surname = "Gray";
        const playerWithNoGivenName = {
            "player": {
                "playerName": {
                    "surname": surname
                }
            }
        };


        const player = playerDecorator(playerWithNoGivenName);
        expect(player.getName()).toBe(surname);
    });

    it('should return a player given name if surname is empty', () => {

        const givenName = "Peter";

        const playerWithNoSurname = {
            "player": {
                "playerName": {
                    "givenName": givenName
                }
            }
        };

        const player = playerDecorator(playerWithNoSurname);
        expect(player.getName()).toBe(givenName);

    });

    it('should return ' + IS_UNKNOWN + ' if surname and givenName do not exist ', () => {
        const playerWithNoName = {
            "player": {
                "playerName": {}
            }
        };


        const player = playerDecorator(playerWithNoName);
        expect(player.getName()).toBe(IS_UNKNOWN);
    });

    it('should return ' + IS_UNKNOWN + ' if playerName does not exist ', () => {
        const playerWithNoName = {
            "player": {}
        };

        const player = playerDecorator(playerWithNoName);
        expect(player.getName()).toBe(IS_UNKNOWN);

    });

    it('should return ' + IS_UNKNOWN + ' if player does not exist ', () => {
        const playerWithNoName = {};

        const player = playerDecorator(playerWithNoName);
        expect(player.getName()).toBe(IS_UNKNOWN);

    });

    it('should return a rating ', () => {
        const rating = 1;
        const playerRating = {
            "detailedRatings": [
                {
                    "ranking": rating,
                    "ratingType": "OVERALL"
                }
            ]
        }
        const player = playerDecorator(playerRating);
        expect(player.getRating()).toBe(1);

    });

    it('should return rating as ' + IS_UNKNOWN + ' when ranking does not exist ', () => {

        const playerRating = {
            "detailedRatings": [
                {
                    "ratingType": "OVERALL"
                }
            ]
        };
        const player = playerDecorator(playerRating);
        expect(player.getRating()).toBe(IS_UNKNOWN);
    });

    it('should return rating as ' + IS_UNKNOWN + ' when detailedRatings is an empty array ', () => {

        const playerRating = {
            "detailedRatings": []
        };
        const player = playerDecorator(playerRating);
        expect(player.getRating()).toBe(IS_UNKNOWN);
    });

    it('should return rating as ' + IS_UNKNOWN + ' when detailedRatings does not exist ', () => {

        const playerRating = {};
        const player = playerDecorator(playerRating);
        expect(player.getRating()).toBe(IS_UNKNOWN);
    });

    it('should return team name ', () => {

        const clubName = "Geelong Cats";
        const playerTeam = {
            "team": {
                "teamName": clubName
            }
        };

        const player = playerDecorator(playerTeam);
        expect(player.getClub()).toBe(clubName);

    });

    it('should return ' + IS_UNKNOWN + ' if teamName does not exist', () => {

        const playerTeam = {
            "team": {}
        };

        const player = playerDecorator(playerTeam);
        expect(player.getClub()).toBe(IS_UNKNOWN);

    });

    it('should return ' + IS_UNKNOWN + ' if team does not exist', () => {

        const playerTeam = {};

        const player = playerDecorator(playerTeam);
        expect(player.getClub()).toBe(IS_UNKNOWN);

    });

    it('should return a player\'s position', () => {

        const position = "MIDFIELDER";
        const playerPosition = {
            "position": position
        };

        const player = playerDecorator(playerPosition);
        expect(player.getPosition()).toBe(position);

    });

    it('should return ' + IS_UNKNOWN + ' if position does not exist', () => {

        const playerPosition = {};
        const player = playerDecorator(playerPosition);
        expect(player.getPosition()).toBe(IS_UNKNOWN);

    });


})