import {Component, OnInit} from '@angular/core';
import {Images} from '../../assets/public/scripts/images';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
    /**
     * Images for the showcase
     */
    public images = new Images().images;

    /**
     * Image Order for Next / Prev
     */
    public imageOrder: string;

    /**
     * String where image URL will be held
     */
    public imageString: string;

    /**
     * Showcase Category
     */
    public showCase = 'Antique';

    /**
     * Showcases array
     */
    public showcases = [
        'Antique',
        'Canada',
        'Cartoon',
        'Fish',
        'Hockey',
        'Locations',
        'Pride',
        'Wilderness'
    ];

    /**
     * Showcase All
     */
    public showEverything = false;

    constructor() {
    }

    public ngOnInit() {
    }

    /**
     * Enlarge the showcase image
     */
    public enlarge(image: string, index: string): void {
        if (!image) {
            return;
        }
        this.imageOrder = index;
        this.imageString = image;
    }

    /**
     * Show / Hide the proper showcase category
     */
    public showcase(showing: string): void {
        if (!showing) {
            return;
        }
        if (showing === 'all') {
            this.showEverything = true;
            return;
        }
        this.showCase = showing;
        this.showEverything = false;
    }
}
