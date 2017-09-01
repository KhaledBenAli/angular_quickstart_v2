import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AgmCoreModule} from 'angular2-google-maps/core';

import {MapComponent} from './map.component'; 
import {MapService} from './map.service';

import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAM_ljlSnqzbT8ie_fCr6TY4e2hbaQKbCk'
        }),
        FormsModule
      ],
      providers: [MapService],
      declarations: [ MapComponent ]
})
export class MapModule {

}