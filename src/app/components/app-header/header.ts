import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header {

    // Variabile instanziata a false
    private _isAdding: boolean = false;

    // Risposta che ricevo dall' app-root
    @Input()
    public get IsAdding(): boolean {

        return this._isAdding;
    }
    public set IsAdding(value: boolean) {

        this._isAdding = value;
    }

    // Risposta che mando all'app-root
    @Output()
    public inAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

    // Metodo che al click del pulsante add
    inAdding(): void {

        this.inAdd.emit(true);
    }
}