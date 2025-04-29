import { LightningElement,api } from 'lwc';
//import objectNameApi from '@salesforce/schema/objectApiName';
import FIELD_NAME from '@salesforce/schema/Account.Name';
import FIELD_PHONE from '@salesforce/schema/Account.Phone';
export default class RecordFormComp9dec23 extends LightningElement {
    @api recordId;
    @api objectNameApi;
    fields = [FIELD_NAME,FIELD_PHONE];
    handleSubmit(event) {
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        fields.Name = 'My Custom  Name'; // modify a field
        this.template.querySelector('lightning-record-form').submit(fields);
    }
}