import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
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
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import './header.styles.scss';


const Header = ({currentUser, hidden}) => {
const Header = ({currentUser, hidden}) => {
    const handleSubmit = async () => {
    const handleSubmit = async () => {
        try {
        try {
            await auth.signOut()
            await auth.signOut()
        } catch (error) {
        } catch (error) {
            console.error("error signing out:", error.message)
            console.error("error signing out:", error.message)
        }
        }
    }
    }


    return (
    return (
        <div className='header'>
        <div className='header'>
            <Link className='logo-container' to='/'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
                <Logo className='logo'/>
            </Link>
            </Link>
            <div className='options'>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {
                {
                    currentUser ?
                    currentUser ?
                        <div className='option' onClick={handleSubmit}>SIGN OUT</div>
                        <div className='option' onClick={handleSubmit}>SIGN OUT</div>
                    :
                    :
                        <Link className='option' to='/sign-in'>SIGN IN</Link>
                        <Link className='option' to='/sign-in'>SIGN IN</Link>
                } 
                } 
                <Link>
                <Link>
                    <CartIcon />
                    <CartIcon />
                    {
                    {
                        hidden ? null : <CartDropdown />
                        hidden ? null : <CartDropdown />
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);