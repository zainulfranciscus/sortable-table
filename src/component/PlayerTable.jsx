import React from "react";
import "../stylesheets/layout";
import {
    medium3Columns,
    medium4Columns,
    ratingHeaderClassNames,
    ratingColumnClasses,
    medium3Header,
    medium4Header,
    applyGradientOn2ndRows,
    RATING_BOX_CLASS_NAME,
    HIDE_IN_DESKTOP_CLASS
} from "./PlayerTableClassNamesGenerator";
import {playerPositionID, playerRatingID, playerNameID, playerDataID, clubID} from "./PlayerTableIDGenerator";
import {playerDecorator} from "./PlayerDecorator";

export const RATING = "Rating";
export const PLAYER = "Player";
export const CLUB = "Club";
export const POSITION = "Position";

const IMAGE_FOLDER = "./images/";

function clubLogo(clubName) {
    return IMAGE_FOLDER + clubName.toLowerCase().replace(" ", "-") + ".png";
}

function labelForMobile(label) {
    return label + " : ";
}

export default React.createClass({

    players: function () {

        const playerRatings = this.props.playerRatings.map(function (player, index) {

            return <div key={playerDataID(index)} id={playerDataID(index)}>
                <div className={ratingColumnClasses() + applyGradientOn2ndRows(index)} id={playerRatingID(index)}
                     key={playerRatingID(index)}>
                    <div className={RATING_BOX_CLASS_NAME}>
                        <span className={HIDE_IN_DESKTOP_CLASS}>{labelForMobile(RATING)} </span>
                        <span title={RATING}>{playerDecorator(player).getRating()}</span>
                    </div>
                </div>
                <div
                    className={medium4Columns() + " light-blue-font " + applyGradientOn2ndRows(index)}
                    id={playerNameID(index)} key={playerNameID(index)}>
                    <span className={HIDE_IN_DESKTOP_CLASS}>{labelForMobile(PLAYER)} </span>
                    <span title={PLAYER}>{playerDecorator(player).getName()}</span>
                </div>
                <div
                    className={medium3Columns() + " light-blue-font " + applyGradientOn2ndRows(index)}
                    id={clubID(index)} key={clubID(index)}>
                    <span className={HIDE_IN_DESKTOP_CLASS}>{labelForMobile(CLUB)}</span>
                    <img className="club-logo" src={clubLogo(playerDecorator(player).getClub())}/>
                    <span title={CLUB}>{playerDecorator(player).getClub()}</span>
                </div>
                <div className={medium4Columns() + applyGradientOn2ndRows(index)}
                     id={playerPositionID(index) + applyGradientOn2ndRows(index)}
                     key={playerPositionID(index)}>
                    <span className={HIDE_IN_DESKTOP_CLASS}>{labelForMobile(POSITION)}</span>
                    <span title={POSITION}>{playerDecorator(player).getPosition()}</span></div>

            </div>;
        });

        return <div className="row">{playerRatings}</div>
    },
    sortByRating: function () {
        this.props.sortByRating(this.props);
    },
    sortByName: function () {
        this.props.sortByName(this.props);
    },
    sortByClub: function () {
        this.props.sortByClub(this.props);
    },
    sortByPosition: function () {
        this.props.sortByPosition(this.props);
    },
    tableHeader: function () {
        return <div className="row">
            <div className={ratingHeaderClassNames()} onClick={this.sortByRating}>{RATING}</div>
            <div className={medium4Header()} onClick={this.sortByName}>{PLAYER}</div>
            <div className={medium3Header()} onClick={this.sortByClub}>{CLUB}</div>
            <div className={medium4Header()} onClick={this.sortByPosition}>{POSITION}</div>
        </div>;
    },
    render: function () {

        const tableHeader = this.tableHeader();
        const players = this.players();
        return (<div>
                {tableHeader}
                {players}
            </div>
        );

    }
});