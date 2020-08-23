import { observable, action } from 'mobx'

export class Input {
    @observable amount = ''
    @observable vendor = ''
    @observable category = ''

    @action handleInput = ({ target }) => {
        this[target.name] = target.value
    }
}