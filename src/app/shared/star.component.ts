import { Component, Input, Output, EventEmitter } from "../../../node_modules/@angular/core";
// import { EventEmitter } from "events";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

        onClick(): void {
            this.ratingClicked.emit('The rating is '+this.rating);
        }
    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.starWidth = this.rating * 75 / 5;
    }

}