import React from "react";
import display from "../../d3/BubbleChart";

var teamData = [
    {id: "Pittsburgh Steelers", divisionId: 1, conferenceId: 1, size: 6},
    {id: "New England Patriots", divisionId: 2, conferenceId: 1, size: 6},
    {id: "San Francisco 49ers", divisionId: 8, conferenceId: 2, size: 5},
    {id: "Dallas Cowboys", divisionId: 6, conferenceId: 2, size: 5},
    {id: "Green Bay Packers", divisionId: 5, conferenceId: 2, size: 4},
    {id: "New York Giants", divisionId: 6, conferenceId: 2, size: 4},
    {id: "Oakland Raiders", divisionId: 4, conferenceId: 1, size: 3},
    {id: "Washington Redskins", divisionId: 6, conferenceId: 2, size: 3},
    {id: "Denver Broncos", divisionId: 4, conferenceId: 1, size: 3},
    {id: "Kansas City Chiefs", divisionId: 4, conferenceId: 1, size: 2},
    {id: "Baltimore Ravens", divisionId: 1, conferenceId: 1, size: 2},
    {id: "Tampa Bay Buccaneers", divisionId: 7, conferenceId: 2, size: 2},
    {id: "Indianapolis Colts", divisionId: 3, conferenceId: 1, size: 2},
    {id: "Miami Dolphins", divisionId: 2, conferenceId: 1, size: 2},
    {id: "New Orleans Saints", divisionId: 7, conferenceId: 2, size: 1},
    {id: "New York Jets", divisionId: 2, conferenceId: 2, size: 1},
    {id: "Chicago Bears", divisionId: 5, conferenceId: 1, size: 1},
    {id: "Philadelphia Eagles", divisionId: 6, conferenceId: 1, size: 1},
    {id: "Los Angeles Rams", divisionId: 8, conferenceId: 1, size: 1},
    {id: "Seattle Seahawks", divisionId: 8, conferenceId: 1, size: 1}
]

var divisionData = [
    {id: "AFC North", divisionId: 1, conferenceId: 1, size: 8},
    {id: "AFC East", divisionId: 2, conferenceId: 1, size: 9},
    {id: "AFC South", divisionId: 3, conferenceId: 1, size: 2},
    {id: "AFC West", divisionId: 4, conferenceId: 1, size: 8},
    {id: "NFC North", divisionId: 5, conferenceId: 2, size: 6},
    {id: "NFC East", divisionId: 6, conferenceId: 2, size: 13},
    {id: "NFC South", divisionId: 7, conferenceId: 2, size: 3},
    {id: "NFC West", divisionId: 8, conferenceId: 2, size: 7}
]

class FootballIsLifeArticle extends React.Component {

    componentDidMount() {
        display(divisionData);
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                {/* <h3>Super Bowl Wins</h3> */}
                <div id="vis"></div>
            </div>
        );
    }
}

export default FootballIsLifeArticle;
