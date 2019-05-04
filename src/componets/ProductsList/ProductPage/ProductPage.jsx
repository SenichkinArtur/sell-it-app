import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import product1 from '../../../images/product1.jpg';
import styles from './ProductPage.module.css';

import { connect } from 'react-redux';
import { fetchSingleProduct } from '../../../actions/fetchSingleProduct';

const mapStateToProps = (state) => ({
    singleProduct: state.productsReducer.singleProduct
});

const mapDispatchToProps = (dispatch) => ({
    fetchSingleProduct: (id) => {
        dispatch(fetchSingleProduct(id));
    }
});

class ProductPage extends Component {

    componentDidMount() {
        this.props.fetchSingleProduct(this.props.productId);
    }

    render() {
        let { singleProduct } = this.props;
        return(
            <React.Fragment>
                <Header />
                <div className="container flex-grow">
                    <div className="row">
                        {singleProduct ?
                            <div className={styles.productPage}>
                                <h3>{singleProduct.text}</h3>
                                <div className={styles.productInfo}>
                                    <div className="col-lg-6">
                                        <img src={singleProduct.images.length !== 0 ? singleProduct.images[0].file : product1 } alt=""/>
                                    </div>
                                    <div className={styles.productText + " col-lg-6"}>
                                        <p><span>Title: </span>{singleProduct.text}</p>
                                        <p><span>Theme: </span>{singleProduct.theme}</p>
                                        <p><span>Price: </span>{singleProduct.price}</p>
                                        <p><span>Added by: </span>{singleProduct.owner.username}</p>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);