import React from 'react';
import { withRouter } from 'react-router-dom';
import "./session_form.css"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.errors !== prevState.errors){
      return { errors: nextProps.errors };
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.errors !== this.props.errors){
      //Perform some operation here
      this.setState({errors: prevProps.errors});

      if (this.props.currentUser === true) {
        this.props.history.push('/tweets');
      }
    }
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
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
        <form onSubmit={this.handleSubmit} className="login-form-div">
              <h1>Log in to your account</h1>
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
            <input type="submit" className="signup-submit" value="Submit" />
            {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
