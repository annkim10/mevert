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
    this.demoLogin = this.demoLogin.bind(this)
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user).then(this.props.closeModal); 
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

  demoLogin(e) {
    e.preventDefault()

    let demoUser = {
      email: 'demo@demo.com',
      password: 'password'
    };

    this.props.login(demoUser).then(this.props.closeModal); 

  }

  render() {
    console.log("inside login", this.props)
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
            <div className='buttons-div'>
              <input type="submit" className="signup-submit" value="LOG IN" />
              <button className='signup-submit' onClick={this.demoLogin}>DEMO LOGIN</button>     
            </div>
            {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
