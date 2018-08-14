import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Film from '../../containers/Film';
import FilmDetail from '../../containers/FilmDetail';

const Main = props =>(
    <Switch>
        <Route exact path="/" component={Film}/>
        <Route path="/film/:id" component={FilmDetail}/>
    </Switch>
);

export default Main;