import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor (){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render (){
        return (
            <div className='sign-in'>
                <h1>I don't have an account</h1>
                <span>Sign up with your email and password</span>
            </div>
        )
    }
}

export default SignUp;