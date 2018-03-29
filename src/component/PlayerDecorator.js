export const IS_UNKNOWN = "Unknown";
export const playerRatings = "playerRatings";

export const BY_RATING = "rating";
export const BY_NAME = "name";
export const BY_CLUB = "club";
export const BY_POSITION = "position";

export function playerDecorator(playerData) {

    return {
        getPlayerNames: function () {
            if (typeof playerData.player === "undefined" || typeof playerData.player.playerName === "undefined") {
                return undefined;
            }
            return playerData.player.playerName;
        },
        getRating: function () {
            if (typeof playerData.detailedRatings === "undefined" || playerData.detailedRatings.length == 0 || typeof playerData.detailedRatings[0].ranking === "undefined") {
                return IS_UNKNOWN;
            }
            return playerData.detailedRatings[0].ranking;
        },
        getGivenName: function () {
            const playerName = this.getPlayerNames();
            if (typeof playerName !== "undefined" && typeof playerName !== "undefined" && typeof playerName.givenName !== "undefined") {
                return playerName.givenName;
            } else {
                return "";
            }
        },
        getSurname: function () {
            const playerName = this.getPlayerNames();
            if (typeof playerName !== "undefined" && typeof playerName !== "undefined" && typeof playerName.surname !== "undefined") {
                return playerName.surname;
            } else {
                return "";
            }
        },
        getName: function () {
            const playerName = this.getPlayerNames();

            if (typeof playerName === "undefined" || (typeof playerName.givenName === "undefined" && typeof playerName.surname === "undefined")) {
                return IS_UNKNOWN;
            }

            return (this.getGivenName() + " " + this.getSurname()).trim();
        },
        getClub: function () {
            if (typeof playerData.team === 'undefined' || typeof playerData.team.teamName === 'undefined') {
                return IS_UNKNOWN;
            }
            return playerData.team.teamName;
        },
        getPosition: function () {

            if (typeof playerData.position === "undefined") {
                return IS_UNKNOWN;
            }
            return playerData.position;
        },
        getSortableProperty: function (sortBy) {
            let sortableProperties = {};
            sortableProperties[BY_RATING] = this.getRating();
            sortableProperties[BY_NAME] = this.getName();
            sortableProperties[BY_CLUB] = this.getClub();
            sortableProperties[BY_POSITION] = this.getPosition();

            return sortableProperties[sortBy];
        }
    }

}
