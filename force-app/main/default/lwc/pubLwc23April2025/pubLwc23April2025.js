import { LightningElement } from 'lwc';

export default class PubLwc23April2025 extends LightningElement {

    count = 0; // Changed from 'int count = 0;' to 'count = 0;'
    // This is the Publish component
    handleAddition(event) {
               // const eventData = {value: event.detail.value};
       this.count = event.detail.value;
       console.log('count value from UI: ' + this.count);
       this.count += 1;
    }

    handleSubtraction(event) {
        this.count -= event.detail.value;
        console.log('count value after subtraction: ' + this.count);

    }

    handleMultiplication() {

        this.count = event.detail.value;
       console.log('count value from UI: ' + this.count);
       this.count = count*2;
    }

    handleDivision() {
        this.count = event.detail.value;
        console.log('count value from UI: ' + this.count);
        this.count = count/2;
    }

    handleReset() {

    }
}