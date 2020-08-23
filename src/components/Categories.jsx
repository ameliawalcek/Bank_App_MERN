import React from 'react';
import Category from './Category'
import { observer, inject } from 'mobx-react'

const Categories = inject("transaction")(observer((props) => {
    let { category } = props.match.params
    let { categories } = props.transaction

    const displayCategory = () => {
        let categoryData = categories.find(c => c._id.toLowerCase() === category)

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
}))

export default Categories;