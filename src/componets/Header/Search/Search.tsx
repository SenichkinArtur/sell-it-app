import React from 'react';
import styles from './Search.module.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { searchValueChange } from '../../../actions/products';

interface StateProps {
    searchValue: string
}

interface DispatchProps {
    searchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const mapStateToProps = (state: StateProps) => ({
    searchValue: state.searchValue,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    searchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchValueChange(event.currentTarget.value));
    }
})

const Search: React.FC<StateProps & DispatchProps> = ({ searchValue, searchValueChange }) => {
    return (
        <div className={styles.search_block + " col-lg-4 col-md-8 offset-md-2 offset-lg-0 "}>
            <input value={searchValue} onChange={(event) => searchValueChange(event)} type="search" className={styles.search_block__input} placeholder="Try find something" />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)