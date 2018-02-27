import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import LandingPage from '../LandingPage/LandingPage';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
    }

    render() {
        return (
            <div>
            <Router>
                <Switch>
                    <Route exact path='/' render={() => 
                    <LandingPage
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
                </Switch>
            </Router>
            </div>
        )
    }
}

export default App;

