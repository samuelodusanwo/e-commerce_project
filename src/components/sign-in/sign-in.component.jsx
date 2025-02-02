import React from "react";
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    render() {
        return( 
            <div className="sign-in">
                <h1>Already have an account</h1>
                <span>Sign In with your email and password</span>
                <form action="#" onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} required />
                    <label>Email</label> 

                    <input type="password" name="password" value={this.state.password} required />
                    <label>Password</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn;