import React, { Component } from 'react'
import {  Route,Switch} from 'react-router-dom';

import HomeComponent from '../../components/Home/Home';
import ReviewsComponent from '../../components/Reviews/Reviews';
import ReviewsDetailComponent from '../../components/Reviews/ReviewDetails/ReviewDetails';
import TeasersComponent from '../../components/LatestRelease/Teasers/Teasers';

import Navlinks from '../Navlink/Navlinks';
const RouterComponent =()=>  {

    const myroutes=(

        <Switch>
        <Route path="/"  exact={true} component={HomeComponent}/>
        <Route path="/Reviews" exact={true} component={ReviewsComponent}/>
        <Route path="/ReviewDetail/:id" exact={true} component={ReviewsDetailComponent}/>
        <Route path="/Teasers" exact={true} component={TeasersComponent}/>

       </Switch>
    
    )
        return (
            <div>

                <div>
                    <Navlinks/>
                </div>

                <div>
                    {myroutes}
                </div>

            </div>
        )
    
}


export default RouterComponent