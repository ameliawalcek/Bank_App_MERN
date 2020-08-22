import React from 'react';
import Category from './Category'

function Categories(props) {
    let { category } = props.match.params

    const displayCategory = () => {
        let categoryData = props.categories.find(c => c._id.toLowerCase() === category)

        return categoryData && categoryData.entry.map(c =>
            <Category amount={c.amount} vendor={c.vendor} category={c.category} key={Math.random()} />
        )
    }

    return (
        <div>
            <div className='sub-header'>{category.toUpperCase()}</div>
            {displayCategory()}
        </div>
    )
}

export default Categories;