import React from 'react';
import { withRouter } from 'react-router-dom';
import "./session_form.css"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      demo: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
    // this.renderErrors = this.renderErrors.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.errors !== prevState.errors){
      return { errors: nextProps.errors };
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("inside update prev-props", prevProps)
    console.log("inside update state", this.state.errors)  

    if(prevProps.errors !== this.props.errors){
      this.setState({errors: prevProps.errors});
    }

    if (this.props.loggedIn) {
      this.props.history.push('/')
      this.props.closeModal()
    } 
  }


  update(field) {
    // return e => this.setState({
    //   [field]: e.currentTarget.value
    // });

    if (!this.state.demo) {
      return e => this.setState({
          [field]: e.currentTarget.value
        });
    } 
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }


  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)

  }

  demoLogin(e) {
    e.preventDefault()
    this.setState({demo: true, email: "demo@demo.com", password: "password"}, () => this.handleSubmit(e))
  }

  // renderForm() {
  //   if (this.state.errors) {
  //     return (
  //             <form onSubmit={this.handleSubmit} className="login-form-div">
  //                   <h1>Log in to your account</h1>
  //                   <p className='login-error-message'>{this.state.errors.email}</p>
  //                   <input className={this.state.errors.length === 0 ? "login-input" : "err-input"} type="text"
  //                     value={this.state.email}
  //                     onChange={this.update('email')}
  //                     placeholder="Email"
  //                   />
  //                 <br/>
  //                  <p className='login-error-message'>{this.state.errors.password}</p>
  //                   <input className={this.state.errors.length === 0 ? "login-input" : "err-input"} type="password"
  //                     value={this.state.password}
  //                     onChange={this.update('password')}
  //                     placeholder="Password"
  //                   />
  //                 <br/>
  //                 <div className='buttons-div'>
  //                   <input type="submit" className="signup-submit" value="LOG IN" />
  //                   <button className='signup-submit' onClick={this.demoLogin}>DEMO LOGIN</button>     
  //                 </div>
  //             </form>
  //         );
  //   } 
  // }

 

  render() {
    console.log("inside login", this.state)
      return (
        <div className="signup-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-div">
                    <h1>Log in to your account</h1>
                    <p className='login-error-message'>{this.state.errors.email}</p>
                    <input className={this.state.errors.length === 0 ? "login-input" : "err-input"} type="text"
                      value={this.state.demo ? "demo@demo.com" : this.state.email}
                      onChange={this.update('email')}
                      placeholder="Email"
                    />
                  <br/>
                    <p className='login-error-message'>{this.state.errors.password}</p>
                    <input className={this.state.errors.length === 0 ? "login-input" : "err-input"} type="password"
                      value={this.state.demo ? "password" : this.state.password}
                      onChange={this.update('password')}
                      placeholder="Password"
                    />
                  <br/>
                  <div className='buttons-div'>
                    <input type="submit" className="signup-submit" value="LOG IN" />
                    <button className='signup-submit' onClick={this.demoLogin}>DEMO LOGIN</button>     
                  </div>
              </form>
        </div>
      )
    
    // return (
    //   <div className="signup-form-container">
    //     <form onSubmit={this.handleSubmit} className="login-form-div">
    //           <h1>Log in to your account</h1>
    //           <input type="text"
    //             value={this.state.email}
    //             onChange={this.update('email')}
    //             placeholder="Email"
    //           />
    //         <br/>
    //           <input type="password"
    //             value={this.state.password}
    //             onChange={this.update('password')}
    //             placeholder="Password"
    //           />
    //         <br/>
    //         <div className='buttons-div'>
    //           <input type="submit" className="signup-submit" value="LOG IN" />
    //           <button className='signup-submit' onClick={this.demoLogin}>DEMO LOGIN</button>     
    //         </div>
    //         {this.renderErrors()}
    //     </form>
    //   </div>
    // );
  }
}

export default withRouter(LoginForm);
