import { LightningElement, wire } from 'lwc';
import FIRST_NAME from '@salesforce/schema/contact.FirstName';
import LAST_NAME from '@salesforce/schema/contact.LastName';
import EMAIL from '@salesforce/schema/contact.Email';
import getcontacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';

const COLUMNS = [
    { label: 'First Name', fieldName: FIRST_NAME.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LAST_NAME.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL.fieldApiName, type: 'Email' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getcontacts)
    contacts;

    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}