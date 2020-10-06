import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import IntroPage from "./IntroPage";
import IntroMaterials from "./IntroMaterials";
import BiblioPage from "./BiblioPage";
import Resources from "./Resources";
import QuestionBoard from "./QuestionBoard";


export class Pages extends Component {

  render() {

    return (
      <div>
          <div className="main">
            <Router>
              {/* <MiniDrawer></MiniDrawer> */}
              <Switch>
                <Route path="/bibliography">
                  <BiblioPage />
                </Route>
                <Route path="/" exact>
                  <IntroPage/>
                </Route> 
                <Route path="/intromaterials">
                  <IntroMaterials />
                </Route>
                <Route path="/resources">
                  <Resources />
                </Route>
                <Route path="/questionboard">
                  <QuestionBoard />
                </Route>
                
              </Switch>
            </Router>
          </div>
      </div>
    );
  }
}

export default Pages;
