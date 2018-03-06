import React, { Component } from 'react';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import HomePage from '../../components/HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';
import FlightPlanner from '../../components/FlightPlanner/FlightPlanner';
import Maps from '../../components/Maps/Maps'
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';


class App extends Component {
    constructor() {
        super();
        this.state = {
            airports: [],
            flights: [],
        }
    }

    handleLogout = (e) => {
        e.preventDefault();
        userService.logout();
        this.setState({user: null});
        this.props.history.push('/');
    }

    handleSignup = () => {
        this.setState({user: userService.getUser()});
    }

    handleLogin = () => {
        this.setState({user: userService.getUser()});
        userService.getFlights().then(flights => {
            this.setState({ flights });
        });
    }

    addFlightPlan = (flightPlan) => {
        fetch("api/flights", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(flightPlan)       
        })
        
        .then(res => res.json())
        .then((flights) => {
            this.setState({
                flights
            });
            this.props.history.push('/homepage');
        })
        .catch(err => console.log(err))
    }
    
    componentDidMount() {
        let user = userService.getUser();
        this.setState({ user });

        fetch("api/airports")
            .then(res => res.json())
            .then(airports => this.setState({ airports }))
            .catch(err => console.log(err))

        if (user) userService.getFlights().then(flights => {
            this.setState({ flights });
        });

    }
    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() =>
                    <LandingPage />
                    }/>
                    <Route exact path='/homepage' render={() =>( 
                        userService.getUser() ?
                        <HomePage 
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                        flights={this.state.flights}
                        />
                        :
                        <Redirect to='/login' />
                        
                    )}/>
                    <Route exact path='/signup' render={(props) =>
                        <SignupPage 
                            {...props} 
                            handleSignup={this.handleSignup}
                        />   
                    }/>
                    <Route exact path='/login' render={(props) =>
                        <LoginPage
                            {...props}
                            handleLogin={this.handleLogin}
                        />
                    }/>
                    <Route exact path='/planner' render={() => (
                        userService.getUser() ?
                            <FlightPlanner
                                addFlightPlan={this.addFlightPlan}
                            />
                        :
                        <Redirect to='/login' />
                    )}/>
                    <Route exact path='/map' render={() => (
                        userService.getUser() ?
                            <Maps 
                                airports={this.state.airports}
                            />
                        :
                        <Redirect to='/login' />  
                    )}/>
                </Switch>
            </div>
        )
    }
}

export default App;

