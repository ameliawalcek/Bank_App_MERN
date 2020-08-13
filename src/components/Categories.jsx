import React, { Component } from 'react';
//import '../style/Category'
import Category from './Category'

class Categories extends Component {

    displayCategory = () => {
        let { category } = this.props.match.params
        let categoryData = this.props.categories.length && this.props.categories.find(c => c._id.toLowerCase() === category)
        return categoryData && categoryData.entry.map(c =>
            <Category amount={c.amount} vendor={c.vendor} category={c.category} />
        )
    }
    render() {
        let { category } = this.props.match.params
        return (
            <div className='category-main-container'>
                <div className='sub-header'>{category.toUpperCase()}</div>
                {this.displayCategory()}
            </div>
        )
    }
}

export default Categories;