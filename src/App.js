import React from 'react';
import {ThemeProvider} from "styled-components";
import  theme from 'style/theme'
import  GlobalStyle from './index.css'
import {Navigation} from "componets"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
         <Router>
            <Navigation items={
              {content: 'Homepage', to:'/'},
              {content: 'Budget', to:'/budget'}
            }/>

            <Switch>
            <Route exact path="/">
                  Home 
                </Route>
                <Route path="/budget">
                  Budget
                </Route>
            </Switch>
        </Router>
  
    </ThemeProvider>
  );
}

export default App;
