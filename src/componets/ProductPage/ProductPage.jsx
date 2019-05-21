import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import productDefaultImg from '../../assets/images/product-default.jpg';
import styles from './ProductPage.module.css';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../../actions/products';

const mapStateToProps = (state) => ({
    singleProduct: state.productsReducer.singleProduct,
    isLogin: state.userReducer.isLogin
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
        let { singleProduct, isLogin } = this.props;
        if (!isLogin) return <Redirect to='/' />
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
                                        <img src={singleProduct.images.length !== 0 ? singleProduct.images[0].file : productDefaultImg } alt=""/>
                                    </div>
                                    <div className={styles.productText + " col-lg-6"}>
                                        <p><span>Title: </span>{singleProduct.text || 'Product Title'}</p>
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

// const ProductLog = (WrappedProduct) => {
//     return class extends Component {
//         componentWillReceiveProps(nextProps) {
//             if (nextProps.singleProduct) {
//                 console.log(nextProps.singleProduct.theme);
//             }
//         }
//         render() {            
//             return (
//                 <WrappedProduct {...this.props}/>
//             )
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProductLog(ProductPage));

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);