import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils';
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

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        return( 
            <div className="sign-in">
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form action="#" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email'
                        required 
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='password'
                        required 
                    />

                    <CustomButton type="submit"> SIGN IN </CustomButton>
                    <CustomButton onclick={signInWithGoogle}>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;