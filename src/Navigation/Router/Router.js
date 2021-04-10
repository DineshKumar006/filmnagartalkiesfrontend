import React, { Component } from 'react'
import {  Route,Switch} from 'react-router-dom';

import HomeComponent from '../../components/Home/Home';
import ReviewsComponent from '../../components/Reviews/Reviews';
import ReviewsDetailComponent from '../../components/Reviews/ReviewDetails/ReviewDetails';
import TeasersComponent from '../../components/LatestRelease/Teasers/Teasers';
import TeaserDetailComponent from '../../components/LatestRelease/Teasers/TeaserDetails/TeaserDetail';

import TrailerDetailsComponent from '../../components/LatestRelease/Trailers/TrailerDetails/TrailerDetails';
import TrailerComponent from '../../components/LatestRelease/Trailers/Trailers';
import PhotoshootComponent from '../../components/Gallery/Photoshoot/Photoshoot';
import PhotoDetailsComponent from '../../components/Gallery/Photoshoot/PhotoDetails/PhotoDetails';
import MaleActorsComponent from '../../components/Gallery/MaleActors/MaleActors';
import MaleActorDetails from '../../components/Gallery/MaleActors/MaleActorDetails/MaleActorDetails';


import FeMaleActorsComponent from '../../components/Gallery/FemaleActors/FeMaleActors';
import FeMaleActorDetailsComponent from '../../components/Gallery/FemaleActors/FeMaleActorDetails/FeMaleActorDetails';


import EventsComponent from '../../components/Gallery/Events/Events';
import EventDetailsComponent from '../../components/Gallery/Events/EventDetails/EventsDetails';


import WorkingStillsComponent from '../../components/Gallery/WorkingStills/WorkingStills';
import WorkingStillsDetailsComponent from '../../components/Gallery/WorkingStills/workingStillDetails/WorkingStillDetails';


import GeneralNews from '../../components/News/GeneralNews';

import FilmNews from '../../components/News/FilmNews';
import FilmNewsDetailsComponent from '../../components/News/FilmNewsDetails'

import GeneralNewsDetailsComponent from '../../components/News/GeneralNewsDetails'


import SongsComponent from '../../components/LatestRelease/Songs/Albums';
import AlbumDetailsComponent from '../../components/LatestRelease/Songs/AlbumDetails/AlbumDetails';
import Navlinks from '../Navlink/Navlinks';
import  Style  from './Style.module.css';
const RouterComponent =()=>  {

    const myroutes=(

        <Switch>
        <Route path="/"  exact={true} component={HomeComponent}/>
        <Route path="/Reviews" exact={true} component={ReviewsComponent}/>
        <Route path="/ReviewDetail/:id" exact={true} component={ReviewsDetailComponent}/>
        <Route path="/Teasers" exact={true} component={TeasersComponent}/>
        <Route path="/TeaserDetail/:id" exact={true} component={TeaserDetailComponent}/>

        <Route path="/Trailers" exact={true} component={TrailerComponent}/>
        <Route path="/TrailerDetail/:id" exact={true} component={TrailerDetailsComponent}/>
        
        <Route path="/Photoshoots" exact={true} component={PhotoshootComponent}/>
        <Route path="/Photodetails/:id" exact={true} component={PhotoDetailsComponent}/>

        <Route path="/Actors" exact={true} component={MaleActorsComponent}/>
        <Route path="/ActorDetails/:id" exact={true} component={MaleActorDetails}/>
        
        <Route path="/Actresses" exact={true} component={FeMaleActorsComponent}/>
        <Route path="/ActressesDetails/:id" exact={true} component={FeMaleActorDetailsComponent}/>

        <Route path="/Events" exact={true} component={EventsComponent}/>
        <Route path="/EventDetails/:id" exact={true} component={EventDetailsComponent}/>


        <Route path="/Workingstills" exact={true} component={WorkingStillsComponent}/>
        <Route path="/WorkingDetails/:id" exact={true} component={WorkingStillsDetailsComponent}/>
        
        <Route path="/Songs" exact={true} component={SongsComponent}/>
        <Route path="/AlbumDetails/:id" exact={true} component={AlbumDetailsComponent}/>
        

        <Route path='/generalNews' exact={true} component={GeneralNews}/>
        <Route path='/GeneralNewsDetails/:id' exact={true} component={GeneralNewsDetailsComponent}/>


        <Route path='/filmNews' exact={true} component={FilmNews}/>
        <Route path='/FilmNewsDetails/:id' exact={true} component={FilmNewsDetailsComponent}/>


        
        


       </Switch>
    
    )
        return (
            <div style={{minHeight:'100vh'}}>


                <div>
                    {myroutes}
                </div>

            </div>
        )
    
}


export default RouterComponent