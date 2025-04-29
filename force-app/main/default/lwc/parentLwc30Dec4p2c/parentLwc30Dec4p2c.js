import { LightningElement } from 'lwc';

export default class ParentLwc30Dec4p2c extends LightningElement {

    parentCounterValue =0;

    handlerChnageStartCounter(event){
        this.parentCounterValue = parseInt(event.target.value);
        console.log('handlerChnageStartCounter value: ' + this.parentCounterValue);

    }

    handelMaximizeClick(){
        console.log('maximize value :');

         this.template.querySelector('c-child-lwc30-dec4p2c').maximizeCounterByChildMethod();
         console.log('maximize value :' + this.template.querySelector('c-child-lwc30-dec4p2c').maximizeCounterByChildMethod());
    }


}