import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    /**
     * Website Logo
     */
    public logo = '../assets/public/images/logo.png';

    /**
     * Mobile Menu
     */
    public mobileMenu = false;

    /**
     * Init
     */
    public ngOnInit(): void {

    }
}
