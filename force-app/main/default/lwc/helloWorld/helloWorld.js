import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Zero to Hero";

    // one way data binding
    title = "aura"

    changeHandler(event){
        this.title = event.target.value;
    }

    // two way data binding starts here
    // using @track decorator

    @track address = {
        city: 'Bangalore',
        state: 'Karnataka'
    }

    trackHandler(event){
        this.address.city = event.target.value;
    }

    // without using @track decorator

    country = {
        name: '',
        code: 'IN'
    }

    withOutTrackHandler(event){
        this.country = {...this.country, "name" : event.target.value};
    }

    // two way data binding ends here

    // getter method

    num1 = 10
    num2 = 20
    
    get multiply(){
        return this.num1 + this.num2;
    }

    user = ["Pavankumar", "Siri"];

    get firstUser(){
        return this.user[0];
    }
}