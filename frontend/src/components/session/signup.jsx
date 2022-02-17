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
    }
    
    if(prevProps.errors !== this.props.errors){
      this.setState({errors: this.props.errors});
    }
 
     if (this.props.signedIn === true) {
        this.props.login({email: this.state.email, password: this.state.password})
        .then(this.props.closeModal)
        // this.props.history.push('/login');
      }
  }

  componentWillUnmount() {
    this.props.clearErrors()
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
             <p className='login-error-message'>{ this.state.errors.firstName }</p>
            <input className={ this.state.errors.firstName ? "err-input" : "login-input"} 
                type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="First name"
            />
            <p className='login-error-message'>{this.state.errors.lastname }</p>
            <input className={ this.state.errors.lastname ? "err-input" : "login-input" } 
              type="text"
              value={this.state.lastName}
              onChange={this.update('lastName')}
              placeholder="Last Name"
            />
             <p className='login-error-message'>{this.state.errors.email}</p>
              <input className={ this.state.errors.email ? "err-input" : "login-input" } 
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
             <p className='login-error-message'>{this.state.errors.password} </p>
              <input className={ this.state.errors.password ? "err-input" : "login-input" } 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <p className='login-error-message'>{this.state.errors.password2} </p>
              <input className={ this.state.errors.password2 ? "err-input" : "login-input" } 
                type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <input className='signup-submit' type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);