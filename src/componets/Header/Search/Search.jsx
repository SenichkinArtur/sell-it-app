import React from 'react';
import styles from './Search.module.css';
import { connect } from 'react-redux';
import { searchValueChange } from '../../../actions/search';

const mapStateToProps = (state) => ({
    searchValue: state.productsReducer.searchValue
});

const mapDispatchToProps = (dispatch) => ({
    searchValueChange: (event) => {
        dispatch(searchValueChange(event.target.value));
    }
})

const Search = ({ searchValue, searchValueChange }) => {
    return (
        <div className={styles.search_block + " col-lg-4 col-md-8 offset-md-2 offset-lg-0 "}>
            <input value={searchValue} onChange={(e) => searchValueChange(e)} type="search" className={styles.search_block__input} placeholder="Try find something" />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);