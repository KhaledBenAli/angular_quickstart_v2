import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

declare var google: any;

@Injectable()
export class MapService {
    getLatLng(address: string): Observable<any> {
        let geocoder = new google.maps.Geocoder();        
        return Observable.create( (observer: any) => {
            geocoder.geocode({'address': address}, (results:any, status:any) =>{
                if(status === google.maps.GeocoderStatus.OK) {
                    console.log(results[0]);
                    observer.next(results[0]);
                    observer.complete();
                } else {
                    console.error('error status: ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    }
}