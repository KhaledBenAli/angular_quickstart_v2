import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HikeService} from './hike.service';
import {HikeListComponent} from './hike-list.component';
import {HikeDetailsComponent} from './hike-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HikeListComponent, HikeDetailsComponent],
    exports: [HikeListComponent],
    providers: [HikeService]
})
export class HikeModule {

} 