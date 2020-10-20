import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { GlobalTheme } from "./base/theme";
import ViewAuth from './ViewAuth'
import ViewUsers from './ViewUsers'

const App = () => {
    return (
        <BrowserRouter>
        <ThemeProvider theme={GlobalTheme}>
            <Switch>
            <Route path="/" exact component={ViewAuth} />
            <Route path="/users" component={ViewUsers} />
          </Switch>
        </ThemeProvider>
        </BrowserRouter>
    )
     
}

export default App