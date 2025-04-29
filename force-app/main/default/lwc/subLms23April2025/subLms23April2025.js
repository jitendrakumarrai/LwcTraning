import { LightningElement,wire } from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import COUNTING_UPDATED_CHANNEL from '@salesforce/messageChannel/Counting_Update__c';

export default class SubLms23April2025 extends LightningElement {

    counter = 0;
    subscription = null;
    // This is wire decorator to get the message context    
    @wire(MessageContext)
    messageContext;

    // This is a placeholder for the SubLms23April2025 component
    // Add your JavaScript logic here
    connectedCallback() {
        // Subscribe to the message channel 
        this.subscription = subscribe(
            this.messageContext,
            COUNTING_UPDATED_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }
//define the handleMessage method to handle incoming messages
    // This method will be called when a message is received
    // It will update the counter value based on the message received
    // The message will contain the operator and constant values
    // The operator will determine the operation to be performed
    // The constant will be the value to be added, subtracted, multiplied or divided
    // The counter value will be updated based on the operation performed
    // The counter value will be displayed in the component
    // The counter value will be updated in the UI 
    handleMessage(message) {
        //alert('Received message: ' + JSON.stringify(message));
         
        // Perform the operation based on the operator and constant values
        // Update the counter value based on the operation performed
        // The operator will determine the operation to be performed
        // The constant will be the value to be added, subtracted, multiplied or divided
        // The counter value will be updated based on the operation performed
        // The counter value will be displayed in the component
       
        if (message.operator == 'add') {

            this.counter += message.constant;
            console.log('Counter value after addition: ' + this.counter);
        }   
        else if (message.operator == 'subtract') {
            this.counter -= message.constant;
            console.log('Counter value after subtraction: ' + this.counter);
        } else if (message.operator == 'multiply') {
            console.log('Counter value before multiplication: ' + this.counter);
            console.log('Constant value: ' + message.constant);
            this.counter *= message.constant;
            console.log('Counter value after multiplication: ' + this.counter);
        } else if (message.operator == 'divide') {
            this.counter /= message.constant;
            console.log('Counter value after division: ' + this.counter);
        }
        else if (message.operator == 'reset') {
            this.counter = 0;
            console.log('Counter has been reset to: ' + this.counter);
            }
            
    }
}