import React from 'react';
import { Link } from 'react-router-dom'

function SubLanding(props) {
    let { categoryInfo } = props

    return (
        <div id={categoryInfo.name}>
            <div className='cat-title'>{categoryInfo.name}</div>
            <Link to={`/category/${(categoryInfo.name).toLowerCase()}`}><i className={`${categoryInfo.icon} fa-2x`} style={{ color: categoryInfo.color }}></i></Link>
            <div className={categoryInfo.name}>
                {`$ ${props.categorySum(categoryInfo.name)}.00`}
            </div>
        </div>
    )
}

export default SubLanding;