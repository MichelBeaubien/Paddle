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
     * Control Next / Prev Images in Showcase
     */
    public orderImage(direction: string, order: string): void {
        console.log(order);
        this.imageString = this.imageString.replace(order, '').replace('.jpg', '');
        console.log(this.imageString);

        // if (direction === 'left') {
        //     this.imageOrder = order - 1;
        //     this.imageString = this.imageString + this.imageOrder + '.jpg';
        // }
        //
        // if (direction === 'right') {
        //     this.imageOrder = order + 1;
        //     this.imageString = this.imageString + this.imageOrder + '.jpg';
        // }
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
