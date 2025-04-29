import { LightningElement,api } from 'lwc';

export default class GrandChild25April2025 extends LightningElement {
    @api parentProperty;
     

    handleClick() {
         console.log('parent Property: ', this.parentProperty); 
            }
}