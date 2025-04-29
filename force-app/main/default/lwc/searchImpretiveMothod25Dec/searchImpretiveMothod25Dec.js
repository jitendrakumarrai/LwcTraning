import { LightningElement,api,wire,track } from 'lwc';
import getAccList from '@salesforce/apex/SearchAccountDataContraller24Dec.getAccountList';

export default class SearchImpretiveMothod25Dec extends LightningElement {

    @api searchedValue = '';
    @api accList = [];
 
    changeHadler(event){
    
            console.log("Entered value : " + event.target.value);
            this.searchedValue = event.target.value;

    }
    clickHandler(){ 
        console.log('clicked ...24 on submit  ' + this.searchedValue); 
     
        getAccList({searchValue : this.searchedValue})
          .then((result) => {

            this.accList = result;
            console.log('account list : ' + this.accList);
          })
          .catch((error) => {
            this.error = error;
            console.log('Error at catch : ' + error.log.value);
          });
      }

}