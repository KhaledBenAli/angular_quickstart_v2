import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {ContactService} from './contact.service';

@Component({
    // selector: 'contact-us',
    moduleId: module.id,
    templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent {

    constructor(private _contactService:ContactService){}

    sendMessage(form: NgForm){
        this._contactService.postContactForm(form.value);
    }
}