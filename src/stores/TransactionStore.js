import { observable, action } from 'mobx'
import axios from 'axios'

export class Transaction {
    @observable data = []
    @observable dataSum = []
    @observable categories = []

    @action async getData() {
        let data = await axios.get("http://localhost:4200/transactions")
        this.data = data.data
    }

    @action async getSums() {
        let dataSum = await axios.get('http://localhost:4200/transactions/sums')
        this.dataSum = dataSum.data[0]
    }

    @action async getCategories() {
        let categories = await axios.get(`http://localhost:4200/categories`)
        this.categories = categories.data
    }

    @action findCategorySum(str) {
        let category = this.categories.length && this.categories.find(c => c._id === str)
        return category ? category.total : []
    }

    @action async addTransaction(amount, vendor, category, string) {
        amount = string === 'income' ? amount : -amount

        if (this.dataSum.balance + amount > 0) {
            let transaction = { amount, vendor, category }
            let newData = await axios.post('http://localhost:4200/transaction', transaction)
            this.data.unshift(newData.data)
        } else {
            alert('insufficient funds')
        }
    }
    
    @action async removeTransaction(id) {
        await axios.delete(`http://localhost:4200/transaction/${id}`)
        this.data = this.data.filter(d => d._id !== id)

    }
}