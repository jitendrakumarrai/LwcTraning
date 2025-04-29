import { LightningElement } from 'lwc';

export default class Child22April25 extends LightningElement {
    // This is a child component
    // It can be used in a parent component 

    handlePushData() {
        // Get the value from the lightning-input
        const childData = this.template.querySelector('lightning-input').value;

        console.log('Child component data:', childData);

        // Create and dispatch a custom event with the data
        const messageEvent = new CustomEvent('childdata', {
            detail: childData,
            bubbles: true,
            composed: true
        });

        console.log('Child component event:', messageEvent);

        this.dispatchEvent(messageEvent);
    }
}