import { LightningElement,api } from 'lwc';

export default class Child23April2025 extends LightningElement {
    // This is the child component
    // This is the child to parent relationship component
     @api parentProperty;
     

    handleClick() {
         console.log('parent Property: ', this.parentProperty); 
            }
}