import React, { Component } from 'react';
//import '../style/Categories'

class Category extends Component {
    render() {
        console.log('hello')
        return (
            <div>
                <div className='category-container'>
                        <div className='category-vendor'>{this.props.vendor}</div>
                        <div className='tran-amount-neg'>$ {this.props.amount}.00</div>
                    </div>
            </div>
        )
    }
}

export default Category;