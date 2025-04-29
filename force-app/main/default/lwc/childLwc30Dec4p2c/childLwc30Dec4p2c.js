import { LightningElement,api } from 'lwc';

export default class ChildLwc30Dec4p2c extends LightningElement {

    @api childcountervalue = 0;

    @api maximizeCounterByChildMethod(){
        this.childcountervalue = this.childcountervalue + 100;
       // this.childcountervalue +100;
    }
}