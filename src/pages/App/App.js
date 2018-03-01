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
            selectDeparture: '',
            selectDestination: '',
            // selectDate: '',
            // weight: 0,
            enterDistance: 0,
            selectDayTakeoff: false,
            selectDayLanding: false,
            selectNightTakeoff: false,
            selectNightLanding: false,
            coPilotName: '',
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

    onChangeDeparture = (e) => {
        this.setState({
            selectDeparture: e.target.value
        })
    }

    onChangeDestination = (e) => {
        this.setState({
            selectDestination: e.target.value
        })
    }

    onClickDayTakeoff = () => {
        this.setState({
            selectDayTakeoff: !this.state.selectDayTakeoff}, () => {
        if (this.state.selectDayTakeoff === false) {
            console.log('false')
        } else if (this.state.selectDayTakeoff === true) {
            console.log('true')
          }
        })
    }

    onClickDayLanding = () => {
        this.setState({
            selectDayLanding: !this.state.selectDayLanding}, () => {
        if (this.state.selectDayLanding === false) {
            console.log('false')
        } else if (this.state.selectDayLanding === true) {
            console.log('true')
          }
        })
    }

    onClickNightTakeoff = () => {
        this.setState({
            selectNightTakeoff: !this.state.selectNightTakeoff}, () => {
        if (this.state.selectNightTakeoff === false) {
            console.log('false')
        } else if (this.state.selectNightTakeoff === true) {
            console.log('true')
          }
        })
    }

    onClickNightLanding = () => {
        this.setState({
            selectNightLanding: !this.state.selectNightLanding}, () => {
        if (this.state.selectNightLanding === false) {
            console.log('false')
        } else if (this.state.selectNightLanding === true) {
            console.log('true')
          }
        })
    }

    onChangeDistance = (e) => {
        this.setState({
            enterDistance: e.target.value
        })
    }

    // onChangeDate = (e) => {
    //     this.setState({
    //         selectDate: e.target.value
    //     })
    // }

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
                coPilot: this.state.coPilotName,
                departure: this.state.selectDeparture,
                destination: this.state.selectDestination,
                dayTakeoff: this.state.selectDayTakeoff,
                dayLanding: this.state.selectDayLanding,
                distance: this.state.enterDistance,
                nightTakeoff: this.state.selectNightTakeoff,
                nightLanding: this.state.selectNightLanding
                // date: this.state.selectDate
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
                            addFlightPlan={this.addFlightPlan}
                            onChangeCoPilot={this.onChangeCoPilot}
                            coPilotName={this.state.coPilotName}
                            onChangeDeparture={this.onChangeDeparture}
                            selectDeparture={this.state.selectDeparture}
                            onChangeDestination={this.onChangeDestination}
                            selectDestination={this.state.selectDestination}
                            onClickDayTakeoff={this.onClickDayTakeoff}
                            selectDayTakeoff={this.state.selectDayTakeoff}
                            onClickDayLanding={this.onClickDayLanding}
                            selectDayLanding={this.state.selectDayLanding}
                            onChangeDistance={this.onChangeDistance}
                            enterDistance={this.state.enterDistance}
                            onClickNightTakeoff={this.onClickNightTakeoff}
                            selectNightTakeoff={this.state.selectNightTakeoff}
                            onClickNightLanding={this.onClickNightLanding}
                            selectNightLanding={this.state.selectNightLanding}
                        />
                    }/>

                </Switch>
            </Router>
            </div>
        )
    }
}

export default App;

