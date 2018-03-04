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
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'


class App extends Component {
    constructor() {
        super();
        this.state = {
            // flights: [],
            selectAircraft: 'SLG2',
            selectTailNumber: 'N166TW (SLG2)',
            selectDeparture: '',
            selectDestination: '',
            selectDate: null,
            enterTime: 0,
            enterAltitude: 0,
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

    onChangeAircraft = (e) => {
        this.setState({
            selectAircraft: e.target.value
        })
    }

    onChangeTailNumber = (e) => {
        this.setState({
            selectTailNumber: e.target.value
        })
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

    onChangeDate = (e) => {
        this.setState({
            selectDate: e.target.value
        })
    }

    onChangeTime = (e) => {
        this.setState({
            enterTime: e.target.value
        })
    }

    onChangeAltitude = (e) => {
        this.setState({
            enterAltitude: e.target.value
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

    
    addFlightPlan = (e) => {
        e.preventDefault();
        fetch("api/flights", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                aircraft: this.state.selectAircraft,
                tailNumber: this.state.selectTailNumber,
                coPilot: this.state.coPilotName,
                departure: this.state.selectDeparture,
                destination: this.state.selectDestination,
                date: this.state.selectDate,
                time: this.state.enterTime,
                altitude: this.state.enterAltitude,
                dayTakeoff: this.state.selectDayTakeoff,
                dayLanding: this.state.selectDayLanding,
                nightTakeoff: this.state.selectNightTakeoff,
                nightLanding: this.state.selectNightLanding
            })       
        })
        
        .then(data => data.json())
        .then((flight) => {
            // this.setState({
            //     flight: flight
            // })
            console.log('yay')
        })
        .catch(err => console.log(err))
    }
    
    componentDidMount() {
        let user = userService.getUser();
        this.setState({user});

        fetch("api/flights")
            .then(res => res.json())
            .then(flights => this.setState({flights}))
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
                            // flight={this.state.flight}
                            addFlightPlan={this.addFlightPlan}
                            onChangeAircraft={this.onChangeAircraft}
                            selectAircraft={this.state.selectAircraft}
                            onChangeTailNumber={this.onChangeTailNumber}
                            selectTailNumber={this.state.selectTailNumber}
                            onChangeCoPilot={this.onChangeCoPilot}
                            coPilotName={this.state.coPilotName}
                            onChangeDeparture={this.onChangeDeparture}
                            selectDeparture={this.state.selectDeparture}
                            onChangeDestination={this.onChangeDestination}
                            selectDestination={this.state.selectDestination}
                            onChangeAltitude={this.onChangeAltitude}
                            enterAltitude={this.state.enterAltitude}
                            onChangeDate={this.onChangeDate}
                            selectDate={this.state.selectDate}
                            onChangeTime={this.onChangeTime}
                            enterTime={this.state.enterTime}
                            onClickDayTakeoff={this.onClickDayTakeoff}
                            selectDayTakeoff={this.state.selectDayTakeoff}
                            onClickDayLanding={this.onClickDayLanding}
                            selectDayLanding={this.state.selectDayLanding}
                            onClickNightTakeoff={this.onClickNightTakeoff}
                            selectNightTakeoff={this.state.selectNightTakeoff}
                            onClickNightLanding={this.onClickNightLanding}
                            selectNightLanding={this.state.selectNightLanding}
                        />
                    }/>
                    <Route exact path='/map' render={() => 
                     <GoogleMaps />
                    }/>
                </Switch>
            </Router>
            </div>
        )
    }
}

export default App;

