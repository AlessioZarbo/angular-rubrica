import { Component, EventEmitter, input, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-header',
    imports: [FormsModule],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header {

    /* ---- SEARCH FEATURE ---- */
    protected searchTerm: string = '';
    @Output()
    public inSearch: EventEmitter<string> = new EventEmitter<string>();
    search(): void {
        this.inSearch.emit(this.searchTerm);
    }

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

    @Input() 
    public inEdit : boolean = false;

    // Risposta che mando all'app-root
    @Output()
    public inAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    public inReload: EventEmitter<boolean> = new EventEmitter<boolean>();

    // Metodo che al click del pulsante add
    inAdding(): void {

        this.inAdd.emit(true);
    }

    inReloading(): void {

        this.inReload.emit(true);
    }
}