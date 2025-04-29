import { LightningElement } from 'lwc';

export default class ChildLwc29Dec23 extends LightningElement {

    handaleDecreament(){
            this.dispatchEvent(new CustomEvent('substract'));
    }

    handaleIncreament(){
        this.dispatchEvent(new CustomEvent('add'));

    }
}