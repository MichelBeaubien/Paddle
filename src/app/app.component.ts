import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public logo = '../assets/public/images/logo.png';

    /**
     * Init
     */
    public ngOnInit(): void {
        console.log('init');
    }
}
