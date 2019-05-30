import React from 'react';
import { connect } from 'react-redux';

import HeaderBlock from '../componets/Header/HeaderBlock';
import { searchValueChange } from '../actions/products';
import { userLogout } from '../actions/user';

const mapStateToProps = (state) => ({
    searchValue: state.productsReducer.searchValue,
    isLogin: state.userReducer.isLogin,
    userInfo: state.userReducer.user
});

const mapDispatchToProps = (dispatch) => ({
    searchValueChange: (event) => {
        dispatch(searchValueChange(event.target.value));
    },
    userLogout: () => {
        dispatch(userLogout());
    }
})

const Header = (data) => {
    return (
        <HeaderBlock data={data} />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
