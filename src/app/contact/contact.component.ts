import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
    public onSubmit(): void {}
}
