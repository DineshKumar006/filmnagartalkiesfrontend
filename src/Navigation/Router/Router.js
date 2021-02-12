import React, { Component } from 'react'
import {  Route,Switch} from 'react-router-dom';

import HomeComponent from '../../components/Home/Home';
import ReviewsComponent from '../../components/Reviews/Reviews';

import Navlinks from '../Navlink/Navlinks';
const RouterComponent =()=>  {

    const myroutes=(

        <Switch>
        <Route path="/"  exact={true} component={HomeComponent}/>
        <Route path="/Reviews" exact={true} component={ReviewsComponent}/>
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