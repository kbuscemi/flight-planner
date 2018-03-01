import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../../components/HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';
import History from '../../components/HistoryPage/HistoryPage';
import FlightPlanner from '../../components/FlightPlanner/FlightPlanner';


class App extends Component {
    constructor() {
        super();
        this.state = {
            flights: [],
            // aircraft: null,
            // tailNumber: null,
            // flightFuel: 0,
            // departure: '',
            // destination: '',
            // date: null,
            // weight: 0,
            // distance: 0,
            // dayTakeoff: false,
            // dayLanding: false,
            // nightTakeoff: false,
            // nightLanding: false,
            coPilotName: "",
            // route: 0
        }
    }

    handleLogout = () => {
        userService.logout();
        this.setState({user: null});
    }

    handleSignup = () => {
        this.setState({user: userService.getUser()});
    }

    handleLogin = () => {
        this.setState({user: userService.getUser()});
    }

    onChangeCoPilot = (e) => {
        this.setState({
            coPilotName: e.target.value
        })
    }

    componentDidMount() {
        let user = userService.getUser();
        this.setState({user});

        fetch("api/flights")
            .then(res => res.json())
            .then(flights => this.setState({flights}))
            .catch(err => console.log(err))
    }

    addFlightPlan = (e) => {
        e.preventDefault();
        fetch("api/flights", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                coPilot: this.state.coPilotName
            })       
        })
        .then(() => console.log('yay'))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
            <Router>
                <Switch>
                    <Route exact path='/' render={() =>
                    <LandingPage />
                    }/>
                    <Route exact path='/homepage' render={() => 
                    <HomePage
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                    />
                    }/>
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
                    <Route exact path='/history' render={() =>
                        <History />
                    }/>
                    <Route exact path='/planner' render={() =>
                        <FlightPlanner
                            // flights={this.state.flights}
                            onChangeCoPilot={this.onChangeCoPilot}
                            coPilotName={this.state.coPilotName}
                            addFlightPlan={this.addFlightPlan}
                        />
                    }/>

                </Switch>
            </Router>
            </div>
        )
    }
}

export default App;

