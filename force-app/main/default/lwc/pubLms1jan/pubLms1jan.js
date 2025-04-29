import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/Counting_Update__c';

export default class PubLms1jan extends LightningElement {
    @wire(MessageContext) messageContext;

    handaleIncreament(){
       
        //alert('handaleIncreament alert');
        console.log('increamental log'); 
        const payload = {
                          operator:'add',
                          constant:10
        };
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);
    }
    handaleDecreamental(){
        //alert('handaleDecreamental alert');
        console.log('handaleDecreamental log'); 
        const payload = {
            operator:'substract',
            constant:10
        };

        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);
    }
    handaleMultiplication(){ 
        //alert('handaleMultiplication alert');
        console.log('handaleMultiplication log');
        const payload = {
            operator:'multiply',
            constant:2
        };
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);
    }
}