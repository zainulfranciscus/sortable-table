import React from "react";
import {connect, Provider} from "react-redux";
import {render} from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer/Reducer";
import PlayerTable from "./component/PlayerTable";
import {sortByRating, sortByName, sortByData, sortByClub, sortByPosition} from "./Action";

const store = createStore(reducer, []);
const Connector = connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {
            sortByRating: (data) => dispatch(sortByRating(data)),
            sortByName: (data) => dispatch(sortByName(data)),
            sortByClub: (data) => dispatch(sortByClub(data)),
            sortByPosition: (data) => dispatch(sortByPosition(data))
        };
    }
)(PlayerTable);


render(
    <Provider store={store}>
        <div><Connector /></div>
    </Provider>,
    document.getElementById('root')
);