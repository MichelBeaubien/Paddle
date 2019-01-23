import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
    /**
     * Showcase Category
     */
    public showCase = 'Fish';

    /**
     * Showcases array
     */
    public showcases = [
        'Fish',
        'Cartoon',
        'Hockey',
        'Antique',
        'Locations',
        'Wilderness',
        'Canada',
        'Pride'
    ];

    /**
     * Showcase All
     */
    public showEverything = false;

    constructor() {}

    public ngOnInit() {}

    public showcase(showing: string): void {
        if (!showing) {
            return;
        }
        this.showCase = showing;
        this.showEverything = false;
        if (showing === 'all') {
            this.showEverything = true;
            return;
        }
    }
}
