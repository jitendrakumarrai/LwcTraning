import { LightningElement } from 'lwc';

export default class GrandPerent24April2025 extends LightningElement {
    grandChildData
    // callback method to handle when the component is inserted into the DOM
    // This method is called when the component is inserted into the DOM
    // It is a lifecycle hook that allows you to perform actions when the component is inserted into the DOM
    connectedCallback() {
        // Perform actions when the component is inserted into the DOM
        console.log('Component has been inserted into the DOM');

    }
    handleGrandChildData(event) {
        // This method is called when the child component pushes data to this parent component
        const grandChildData = event.detail;
        console.log('Grandparent component received grand child data:', grandChildData);
        // The grandparent component can handle the data received from the child component
        // You can use this data in the grandparent component's template
        this.grandChildData = grandChildData;
    }

}