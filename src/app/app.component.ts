import { Component } from '@angular/core';

@Component ({
    selector: 'app-root',
    template: `
    <h2> {{ AppTitle }}! </h2>
    <my-items></my-items>
    `,
    styles: [`
        h2 {
            color: #999;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.2em;
        }
        `]
})

export class AppComponent {
    AppTitle = 'Todo List App';
}