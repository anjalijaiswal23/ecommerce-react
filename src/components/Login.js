import React from 'react';
import "./login.css"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
    // Bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemount = this.handleRemount.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(
      {
        isVisible: false
      },
      function () {
        console.log(this.state.isVisible);
      }
    );
    return false;
  }

  handleRemount(e) {
    this.setState(
      {
        isVisible: true
      },
      function () {
        console.log(this.state.isVisible);
      }
    );
    e.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.isVisible ? (
          <div className='Modal'>
            <Logo />
            <form onSubmit={this.handleSubmit}>
              <Input type='text' name='username' placeholder='username' />
              <Input type='password' name='password' placeholder='password' />
              <button> Sign In</button>
            </form>
            <div className='social-signin'>
              <button className='fb' onClick={this.handleRemount}>
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </button>
              <button className='tw' onClick={this.handleRemount}>
                <i className='fa fa-twitter' aria-hidden='true'></i>
              </button>
            </div>
            <a href='#'>Lost your password ?</a>
          </div>
        ) : (
          <button
            className='bringitback'
            onClick={this.handleRemount}
            key='bringitback'
          >
            Bring the modal back!
          </button>
        )}
      </div>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <div className='logo'>
        <i className='fa fa-bug' aria-hidden='true'></i>
        <span>awesome logo</span>
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return (
      <div className='Input'>
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          required
          autoComplete='false' // 'autocomplete' attribute should be 'autoComplete'
        />
        <label htmlFor={this.props.name}></label> {/* Use 'htmlFor' instead of 'for' */}
      </div>
    );
  }
}

export default Login;
