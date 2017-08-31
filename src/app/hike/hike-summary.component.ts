import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Hike} from './hike'


@Component({
    moduleId: module.id,
    selector: 'hike-summary',
    templateUrl: 'hike-summary.component.html',
    styleUrls: ['hike-summary.component.css']
})
export class HikeSummaryComponent {
    @Input() hike: Hike;
    @Output() addHikeAsFav = new EventEmitter<Hike>();

    toggleAsTodoHike(isAdded: boolean) {
        if(isAdded) {
            this.addHikeAsFav.emit(this.hike);
        }
    }
}