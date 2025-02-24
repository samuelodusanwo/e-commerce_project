import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser}) => {
    const handleSubmit = async () => {
        try {
            await auth.signOut()
        } catch (error) {
            console.error("error signing out:", error.message)
        }
    }
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {
                    currentUser ?
                        <div className='option' onClick={handleSubmit}>SIGN OUT</div>
                    :
                        <Link className='option' to='/sign-in'>SIGN IN</Link>
                }
                <Link>
                    <CartIcon/>
                    <CartDropdown/>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);