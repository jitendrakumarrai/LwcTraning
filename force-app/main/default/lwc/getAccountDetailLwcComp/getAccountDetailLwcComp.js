import { LightningElement,wire } from 'lwc';
import getAccListFromApexClass from '@salesforce/apex/GetAccountDetailsaAtUIClass.getAccDetails'; 
import ACCOUNT_NAME_FIELD from  '@salesforce/schema/Account.Name';
import Industry from '@salesforce/schema/Account.Industry';
export default class GetAccountDetailLwcComp extends LightningElement {


// onchange event for searching values
onChangeHandlerMethod(event){
    console.log('searching Account name :'+ event.target.value);
}
 
     @wire(getAccListFromApexClass, {fields:[ACCOUNT_NAME_FIELD] })
    accList = getAccListFromApexClass;
    
}