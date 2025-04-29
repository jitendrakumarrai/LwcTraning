import { LightningElement, wire } from 'lwc';
import GetSetContactDetailsList from '@salesforce/apex/GetSetContactDetails21April2025.getSetContactDetailsmethod1';

export default class Omguru18April25FirstLwc extends LightningElement {
    conList = [];

    @wire(GetSetContactDetailsList)
    wiredContacts({ error, data }) {
        if (data) {
            this.conList = data;
            console.log('Contact list:', this.conList);
        } else if (error) {
            console.error('Error fetching contact details:', error);
        }
    }

    onchangeHandler(event) {
        const field = event.target.label || event.target.name;
        console.log(`Changed field ${field}:`, event.target.value);
    }

    handleChange(event) {
        // Same as above, or handle specifically
        console.log('Country changed:', event.target.value);
    }

    handleSuccess(event) {
        console.log('Record saved successfully!', event.detail.id);
    }
}