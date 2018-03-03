import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
// import {Navbar} from 'react-materialize'
import './LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
      .then(() => {
        this.props.handleLogin();
        this.props.history.push('/homepage');
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      <div className='loginBackground'>
        <form className='form-horizontal' onSubmit={this.handleSubmit} >
          <div className='form-group'>
            <div className='col-sm-12'>
              <input type='email' className='form-control' placeholder='Email' value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input type='password' className='form-control' placeholder='Password' value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12 text-center'>
              <button className='btn btn-default logInBtn'>Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' className='cancelBtn'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
};

export default LoginForm;