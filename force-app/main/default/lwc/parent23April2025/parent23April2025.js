import { LightningElement,api } from 'lwc';

export default class Parent23April2025 extends LightningElement {
    // This is the parent component
    // This is the parent to child relationship component
    @api parentProperty;
    // This is the parent property
    handleChange(event) {
        // This is the parent method
        this.parentProperty = event.detail.value;
        // This is the parent method
        console.log('Parent Property Value:', this.parentProperty);
    }

}