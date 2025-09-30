import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    nname = '';   // reactive property

    handleClick(){
        this.isVisible = true;
    }

    changeHandler(event) {
        this.name = event.target.value;
    }

    get helloMethod() {
        return this.name === 'hello';
    }
}