import React from 'react';

function Category(props) {

    return (
        <div key={Math.random()} className='category-container'>
            <div className='category-vendor'>{props.vendor}</div>
            <div className='tran-amount-neg'>$ {props.amount}.00</div>
        </div>
    )
}

export default Category;