import { LightningElement } from 'lwc';
export default class AccountIndustriShow6Dec extends LightningElement {


    value = '';

    get options() {
        return [
            { label: 'Media', value: 'media' },
            { label: 'Education', value: 'education' },
            { label: 'Agriculture', value: 'agriculture' },
        ];
    }

   // handleChange(event) {
  //      this.value = event.detail.value;
  //  }
}