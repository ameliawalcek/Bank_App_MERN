import React from 'react';
import { Link } from 'react-router-dom'
import { categoryInfo } from '../data/data'
import { observer, inject } from 'mobx-react'

const Operations = inject("transaction", "input")(observer((props) => {
    let { vendor, category, amount, handleInput } = props.input

    const addTransaction = ({ target }) => {
        amount = parseInt(amount)

        return props.transaction.addTransaction(amount, vendor, category, target.name)
    }

    return (
        <div className='operation-container'>
            <div className='input-container'>
                <div className='new'>Enter new expense</div>
                <input name="amount" onChange={handleInput} type="number" id="amount" placeholder='Amount' required />
                <input name="vendor" onChange={handleInput} type="text" id="vendor" placeholder='Vendor' required />
                <select name="category" id="category" onChange={handleInput} value={category}>
                    <option value='selectCategory'>Select Category</option>
                    <option value='Salary'>Salary</option>
                    {categoryInfo.map(c => {
                        return <option value={c.name} onChange={handleInput} key={Math.random()}>{c.name}</option>
                    })}
                </select>
            </div>
            <div className='button-container'>
                <Link to='/transactions'><button name='income' onClick={addTransaction}>Income</button></Link>
                <Link to='/transactions'><button name='expense' onClick={addTransaction}>Expense</button></Link>
            </div>
        </div>
    )
}))

export default Operations;