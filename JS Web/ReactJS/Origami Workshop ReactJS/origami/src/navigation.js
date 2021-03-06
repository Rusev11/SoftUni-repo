import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import PublicationsPage from './pages/publications';
import ShareThoughtsPage from './pages/share-thoughts';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import ErrorPage from './pages/error';

function Navigation (){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={PublicationsPage}/>
                <Route path='/share' component={ShareThoughtsPage}/>
                <Route path='/register' component={RegisterPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/profile/:userid' component={ProfilePage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation;