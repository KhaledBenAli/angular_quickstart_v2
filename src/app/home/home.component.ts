import {Component, trigger, state, animate, style, transition, keyframes} from '@angular/core';

@Component({
    moduleId: module.id,
    animations: [
        trigger('toggleElement', [
            state('open', style({height:'*'})),
            state('closed', style({height: '0px', 'font-size': '0px'})),

            transition('closed <=> open', [
                animate("1000ms cubic-bezier(1, 0, 0, 1)")                
            ]),

        ]),

        trigger('animateCitation', [
            transition('stateA<=> stateB', [
                animate(600, keyframes([
                    style({opacity: .5, offset: 0}),
                    style({opacity: 1, color: '#fcb514', offset: 0.5}),
                    style({opacity: .7, offset: .7}),
                    style({opacity: 1, offset: 1})
                ]))
            ])
        ])
    ],
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    open: boolean = false;
    toggle: string = 'closed';

    animateCitation: string = 'stateB';

    currentIndex: number = 0;

    quotes: quote[] = [
        {
            id: 0,
            text: "aaa",
            author: "Toto"
        },
        {
            id: 1,
            text: "bbb",
            author: "Tata"
        },
        {
            id: 2,
            text: "ccc",
            author: "Titi"
        }

    ];

    quote: quote = this.quotes[0];

    doToggle() {
        this.open = !this.open;
        if(this.open) {
            this.toggle = 'open';
        } else {
            this.toggle = 'closed';
        }
    }

    getPreviousQuote() {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.quote = this.getQuote(-1);
    }

    getNextQuote() {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.quote =  this.getQuote(1);
    }

    getQuote(increment: number) {
        this.currentIndex += increment;
        if(this.currentIndex < 0 ){
            this.currentIndex = this.quotes.length - 1;
        }

        if(this.currentIndex > this.quotes.length-1) {
            this.currentIndex = 0;
        }

        return this.quotes[this.currentIndex];
    }

    log(event: any){
        console.log(event);
    }
}

interface quote{
    id: number;
    text: string;
    author: string;
}