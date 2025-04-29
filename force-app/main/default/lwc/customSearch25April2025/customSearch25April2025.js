import { LightningElement } from 'lwc';
import searchedContactList from '@salesforce/apex/CustomSearch25April2025Class.searchContact';

export default class CustmumSearch25April2025 extends LightningElement {
    contactsList = [];

    handleContactSearch(event) {
       // alert('Search Contact :' + event.target.value);
        const searchValue = this.template.querySelector('lightning-input').value;
        alert('Search query select Contact :' + searchValue);


        //const searchContactValue = event.target.value.trim(); 
        console.log('Search Contact Value:', searchValue);

        searchedContactList({ contactName: searchValue })
            .then(result => {
                console.log('Search Results:', result);
                this.contactsList = result;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}