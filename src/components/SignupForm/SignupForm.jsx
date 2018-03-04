import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css'

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.signup(this.state)
      // successfully signed up - show landingpage
      .then(() =>{
        // inform <App> that user has signed up
        this.props.handleSignup(); 
        this.props.history.push('/homepage')
      })
      // invalid user data
      .catch(err => this.props.updateMessage(err.message));
  }

  isFormInvalid() {
    return !(this.state.firstName && this.state.lastName && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <div className='signUpBackground'>
        <div>
            <header className="header-footer">Sign Up Below</header>
        </div>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={(e) => this.handleChange('firstName', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={(e) => this.handleChange('lastName', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email Address" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default signUpBtn" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/' className='cancelBtn'>Cancel</Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
};

export default SignupForm;