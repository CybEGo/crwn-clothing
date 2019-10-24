import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './HeaderContainer';

import './Header.scss'

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        { currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
    // <div className='header'>
    //   <Link className='logo-container' to='/'>
    //     <Logo className='logo' />
    //   </Link>
    //   <div className='options'>
    //     <Link className='option' to='/shop'>
    //       SHOP
    //     </Link>
    //     <Link className='option' to='/shop'>
    //       CONATACT
    //     </Link>
    //     { currentUser ? (
    //       <div className='option' onClick={() => auth.signOut()}>
    //         SIGN OUT
    //       </div>
    //     ) : (
    //       <Link className='option' to='/signin'>
    //         SIGN IN
    //       </Link>
    //     )}
    //     <CartIcon />
    //   </div>
    //   {hidden ? null : <CartDropdown />}
    // </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);