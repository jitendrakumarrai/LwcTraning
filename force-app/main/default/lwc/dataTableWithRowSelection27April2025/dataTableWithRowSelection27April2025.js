import { LightningElement,api } from 'lwc';
import getRelatedContacts from '@salesforce/apex/DataTable27April2025class.getRelatedContact';

    const contListData = [
        { label: 'Contact Name', fieldName: 'Name', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' }
    ];

export default class DataTableWithRowSelection27April2025 extends LightningElement {
    buttonLebel = 'Show Contacts';
    @api accountId;
    contDataList;
    contListDataColumns = contListData;
    isDataTableVisible = false;
    searchKey = '';
    connectedCallback(){
        console.log('connectedCallback Account ID:', JSON.stringify(this.accountId));
        getRelatedContacts({ accountRecordId: this.accountId, searchValue: this.searchKey })
        .then(result =>{
            this.contDataList = result;
            console.log('Contact List:', JSON.stringify(this.contDataList));
        })
        .catch(error => {
            console.error('Error fetching contacts:', JSON.stringify(error));
            alert('An error occurred while fetching contacts.');
        });
    }    
    handleShowContact(event) {
        const buttonLebel = event.target.label;
        //alert('Button label:', buttonLebel);
        console.log('Button label:', buttonLebel);
        console.log('isDataTableVisible:', this.isDataTableVisible);
        if (buttonLebel == 'Show Contacts') {
            this.buttonLebel = 'Hide Contacts';
            this.isDataTableVisible = true;
            console.log('isDataTableVisible in if:', this.isDataTableVisible);
            
        } else {
            this.buttonLebel = 'Show Contacts';
            this.isDataTableVisible = false;
            console.log('isDataTableVisible in else:', this.isDataTableVisible);
        }
    }
    handleSearchKeyChange(event) {
        const searchKey = event.target.value;
        console.log(' In handleSearchKeyChange -Search Key:', searchKey);
        this.searchKey = searchKey;
        //console.log('Contact List:', JSON.stringify(this.contDataList));
        console.log('In handleSearchKeyChange  Account ID:', this.accountId);
        console.log('In handleSearchKeyChange this.Search Key:', this.searchKey);

        getRelatedContacts({ accountRecordId: this.accountId, searchValue: this.searchKey })
        .then(result =>{
            this.contDataList = result;
            console.log('Contact List at handleSearchKeyChange:', JSON.stringify(this.contDataList));
        })
        .catch(error => {
            console.error('Error fetching contacts:', JSON.stringify(error));
            alert('An error occurred while fetching contacts.');
        });
    }
   
}