import { LightningElement } from 'lwc';

export default class ParentLwc29Dec extends LightningElement {
    countValue = 0;

    handleSubstract(){
        this.countValue--;
    }
    handleAdd(){
        this.countValue++;
    }
}