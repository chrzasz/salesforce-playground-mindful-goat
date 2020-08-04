import { LightningElement } from 'lwc';

export default class DemoLWC extends LightningElement {

   greeting = 'World';
   currentDate = new Date().toDateString();
   get capitalizedGreeting() {
      return `Hello ${this.greeting.toUpperCase()}!`;
   }
   changeHandler(event) {
     this.greeting = event.target.value;
   }



}