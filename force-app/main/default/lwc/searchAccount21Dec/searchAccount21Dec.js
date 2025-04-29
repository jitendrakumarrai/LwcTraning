import { LightningElement,api,wire } from 'lwc';
import getAccList from '@salesforce/apex/SearchAccountDataContraller24Dec.getAccountList';
//import getAccList from '@salesforce/apex/SearchAccountDataContraller24Dec.getAccountList';
//import GetAccountDetailLwcComp from '../getAccountDetailLwcComp/getAccountDetailLwcComp';

export default class SearchAccount21Dec extends LightningElement {
    searchValue='';
    accList = [];
    @wire (getAccList) wiredAccountsList({data,error}){ 
        console.log('acc dala list data: ' + data); 
        if (data) {
            this.accList = data;
        console.log('acc dala list: ' + this.accList); 
        } else if (error) {
        console.log('Eroor:'+error);
        }
   }
    
    changeHandler(event){
        this.searchValue= event.target.value;
        console.log('Searching Account hariom:  ' + this.searchValue +'accpunt list :  ' + this.accList);
        
    }
    
    clickHandler(){
        console.log('clicked on 2nd submit');
        console.log('Searching Account hariom:  ' + this.searchValue+'on submit accpunt list :  ' + this.accList); 

        
    }

    
}