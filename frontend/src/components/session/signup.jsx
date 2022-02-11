import React from 'react';
import { withRouter } from 'react-router-dom';
import "./session_form.css"

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
      signedIn: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.signedIn !== prevState.signedIn){
      return { signedIn: nextProps.signedIn};
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.signedIn !== this.props.signedIn){
      this.setState({signedIn: prevProps.signedIn});

      if (this.props.signedIn === true) {
        this.props.history.push('/login');
      }
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-div">
          <h1>Create an account</h1>
          <div className="signup-form">
            <br />
            <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="First name"
            />
            <br/>
              <input type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
                placeholder="Last Name"
              />
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input className='signup-submit' type="submit" value="SUBMIT" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);