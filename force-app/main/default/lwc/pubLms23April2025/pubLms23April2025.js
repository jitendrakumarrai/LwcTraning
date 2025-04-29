import { LightningElement,wire } from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import COUNTING_UPDATED_CHANNEL from '@salesforce/messageChannel/Counting_Update__c';


export default class PubLms23April2025 extends LightningElement {

    // This is wire decorator to get the message context
    @wire(MessageContext)
    messageContext;
     
    handleAddition() {
        const payload = {
            operator: 'add',
            constant: 1
        };
        console.log('operator: ' + payload.operator);
        console.log('constant: ' + payload.constant);
        // Publish the message to the message channel
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
        // Log the payload to the console
        console.log('Payload published: ', payload);
        // Log the message context to the console
        console.log('Message context: ', this.messageContext);
    }

    handleSubtraction() {
        const payload = {
            operator: 'subtract',
            constant: 1
        };
        console.log('operator: ' + payload.operator);
        console.log('constant: ' + payload.constant);
        // Publish the message to the message channel
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
        // Log the payload to the console
        console.log('Payload published: ', payload);
        // Log the message context to the console
        console.log('Message context: ', this.messageContext);
    }

    handleMultiplication() {
        const payload = {
            operator: 'multiply',
            constant: 2
        };
        console.log('operator: ' + payload.operator);
        console.log('constant: ' + payload.constant);

        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);

        console.log('Payload published: ', payload);

        console.log('Message context: ', this.messageContext);
    }
    handleDivision() {
        const payload = {
            operator: 'divide',
            constant: 2
        };
        console.log('operator: ' + payload.operator);
        console.log('constant: ' + payload.constant);   
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
        console.log('Payload published: ', payload);
        console.log('Message context: ', this.messageContext);
    }
    handleReset() {
        const payload = {
            operator: 'reset',
            constant: 0
        };
        console.log('operator: ' + payload.operator);
        console.log('constant: ' + payload.constant);

        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);

        console.log('Payload published: ', payload);

        console.log('Message context: ', this.messageContext);
    }

}