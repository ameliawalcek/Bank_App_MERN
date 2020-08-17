import React from 'react';

function Category(props) {

    return (
        <div>
            <div className='category-container' key={Math.random()}>
                <div className='category-vendor'>{props.vendor}</div>
                <div className='tran-amount-neg'>$ {props.amount}.00</div>
            </div>
        </div>
    )
}

export default Category;