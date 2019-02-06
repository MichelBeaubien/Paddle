import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    /**
     * Cleaned phone number - EX: (123)-123-1234
     */
    public cleanedNumber: any = '';

    /**
     * Array where the form information goes.
     */
    public model: any = {};

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * When Form is submitted
     *
     * @returns {void}
     */
    public onSubmit(): void {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
        this.phoneNumber(this.model.phone);
    }

    /**
     * Return the phone number to look like: (123)-123-1234
     *
     * @param {string} phoneNumber
     */
    public phoneNumber(phoneNumber: string): void {
        const cleaned = phoneNumber.includes('(') || phoneNumber.includes(')') || phoneNumber.includes('-');

        this.cleanedNumber = cleaned;
        // const openBracket = phoneNumber.includes('(');
        // const closeBracket = phoneNumber.includes(')');
        //
        // const removeBrackets = phoneNumber.replace('(', '').replace(')', '');
        // const areaCode = phoneNumber.substr(0, 3)
        // const prefix = phoneNumber.substr(3, 3);
        // const number = phoneNumber.substr(6, 8);
        //
        // if (openBracket || closeBracket) {
        //     phoneNumber.replace('(', '').replace(')', '');
        //     this.cleanedNumber = '(' + areaCode + ')-' + prefix + '-' + number;
        //     return;
        // }
        //
        // this.cleanedNumber = '(' + areaCode + ')-' + prefix + '-' + number;
    }
}
