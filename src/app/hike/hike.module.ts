import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HikeService} from './hike.service';
import {HikeListComponent} from './hike-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HikeListComponent],
    exports: [HikeListComponent],
    providers: [HikeService]
})
export class HikeModule {

} 