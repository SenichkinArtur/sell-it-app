import React from 'react';
import './Product.css';
import eyeIcon from '../../../images/eye.png';

function Product(props) {
    let { data } = props;
    return (
        <div className="products__item col-lg-3 col-md-6">
            <img className="products__img" src={data.image} alt="" />
            <div className="products__info">
                <h5 className="products__title">{data.title}</h5>
                <img src={eyeIcon} alt="" />
            </div>
        </div>
    )
}

export default Product;
