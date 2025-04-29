import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/Counting_Update__c';

export default class SubLms1Jan extends LightningElement {

    counterValue = 0;
    subcription = null;

    @wire(MessageContext) messageContext;

    connectedCallback(){
        alert("inside connectedCallback and calling subscribeToMessageChannel() alert");
        console.log("inside connectedCallback and calling subscribeToMessageChannel()");
        this.subscribeToMessageChannel();  
    }

    subscribeToMessageChannel(){
        alert("inside subscribeToMessageChannel and calling subscribe() alert");
        this.subcription = subscribe(this.messageContext,
                                     COUNTING_UPDATE_CHANNEL,
                                     (message) => this.handleMessage(message)
                                    );

    }
    handleMessage(message){
        alert('inside handleMessage method message :' + JSON.stringify(message));
        alert('inside else this.counterValue ' + this.counterValue + 'and message.operator ' + message.operator + 'message.constant ' + message.constant );
        if(message.operator == 'add'){
            alert('inside if add message.constant ' + message.constant );
            this.counterValue += message.constant; 
            alert('inside if add this.counterValue ' + this.counterValue );
        }
        else if(message.operator == 'substract'){
            alert('inside substract else if substract message.constant ' + message.constant );
            this.counterValue -= message.constant; 
            alert('inside if add this.counterValue ' + this.counterValue );
        }
        else if(message.operator == 'multiply'){
            alert('inside multiply else if multiply message.constant ' + message.constant );
            this.counterValue *= message.constant; 
            alert('inside if add this.counterValue ' + this.counterValue );
        }
        else{
            alert('inside else this.counterValue ' + this.counterValue + 'and message.operator ' + message.operator );
        }
    }
}