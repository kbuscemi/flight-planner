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


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: []

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
                        <History flights={this.state.flights} />
                    }/>
                </Switch>
            </Router>
            </div>
        )
    }
}

export default App;

