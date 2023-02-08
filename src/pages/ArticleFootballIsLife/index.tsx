import React from "react";
import display from "../../d3/BubbleChart";

var teamData = [
  {id: "Chicago Bears", groupid: 1, size: 1},
  {id: "Pittsburgh Steelers", groupid: 2, size: 6},
  {id: "New England Patriots", groupid: 2, size: 6}
]

class FootballIsLifeArticle extends React.Component {

    componentDidMount() {
        display(teamData);
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h3>Football is Life?</h3>
                <div id="vis"></div>
            </div>
        );
    }
}

export default FootballIsLifeArticle;
