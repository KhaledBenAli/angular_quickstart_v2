import {Component, ApplicationRef} from '@angular/core';

import {MapService} from './map.service';

@Component({
    moduleId: module.id,
    templateUrl: "map.component.html",
    styleUrls: ['map.component.css']
})
export class MapComponent {
    lat: number =  45.788;
    lng: number =  -73.293;

    droppedLat: number;
    droppedLng: number;

    markerWasDropped: boolean= false;

    startingPoint: string = "H3T1K1";

    markers: Marker[] = [];

    markersFromCoords: Marker[] = [];

    pointsForPolyline: Coord[] = [];

    constructor(private _mapService: MapService, private _applicationRef: ApplicationRef) {

    }

    onCoordMarkerDropped(event: any) {

        this.markerWasDropped = true;

        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    }
    geocode() {
        this._mapService.getLatLng(this.startingPoint).subscribe(
            (data: any) => this.placeMarkerOnGeocodedPlace(data),
            (err: any) => console.error(err),
        );
    }

    placeMarkerOnGeocodedPlace(location: any) {
        let marker: Marker = {
            lat: location.geometry.location.lat(),
            lng: location.geometry.location.lng(),
            title: "",
            draggable: true
        }

        if(this.pointsForPolyline.length === 0) {
            this.pointsForPolyline.push({
                lat: marker.lat,
                lng: marker.lng
            })
        }
        this.markers.push(marker);
        this._applicationRef.tick();
    }

    addMarkerByCoords(formValue: any) {
        let marker: Marker = {
            lat: parseFloat(formValue.markerByCoordsLat),
            lng: parseFloat(formValue.markerByCoordsLng),            
            draggable: false
        }

        this.markersFromCoords.push(marker);
        this._applicationRef.tick();        
    }

    updatePolyLine(event: any) {
        let droppedLat = parseFloat(event.coords.lat);
        let droppedLng = parseFloat(event.coords.lng);
        this.pointsForPolyline.push({
            lat: droppedLat,
            lng: droppedLng
        })
    }

    reset() {
        this.startingPoint = "H3T1K1";
        this.pointsForPolyline = [];
    }

}

interface Marker {
    lat: number;
    lng: number;
    title?: string;
    icon?: string;
    draggable: boolean;
}

interface Coord {
    lat: number;
    lng: number;
}