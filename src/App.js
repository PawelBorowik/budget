import React from 'react';
import {ThemeProvider} from "styled-components";
import  theme from 'style/theme'
import  GlobalStyle from './index.css'
import {Navigation} from "componets"



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div className="App">
     <Navigation items={[]}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
