import { LightningElement } from 'lwc';

export default class Parent22April2025 extends LightningElement {
    // This is a parent component
    // It can contain child components
    receivedChildData = '';
    handleReceivedChildData(event) {
        // This method is called when the child component pushes data to this parent component
        const childData = event.detail;
        console.log('Parent component received data:', childData);
        // The parent component can handle the data received from the child component
        this.receivedChildData = childData;
        // You can use this data in the parent component's template
        console.log('Parent component data:', this.receivedChildData);
        this.dispatchEvent(
            new CustomEvent('parentdata', {
                detail: this.receivedChildData,
                bubbles: true,
                composed: true
            })
        );
        console.log('Parent component event:', this.receivedChildData);

    }

}