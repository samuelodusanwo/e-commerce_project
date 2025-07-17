import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action';
import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      } else {
          setCurrentUser (null); // Fix state when user logs out
        }
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-in' element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})