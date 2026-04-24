import { Component, EventEmitter, Input, input, Output } from "@angular/core";
import { ContactModel } from "../../../models/contactModel";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-contact',
    imports: [FormsModule], // Per fare NgModel
    templateUrl: './contact.html',
    styleUrl: './contact.css'
})
export class Contact {

    private _isAdd: boolean = false;
    @Input()
    public get IsAdd(): boolean {

        return this._isAdd;
    }
    public set IsAdd(value: boolean) {

        this._isAdd = value;
    }


    private _isList: boolean = true;
    @Input()
    public get IsList(): boolean {

        return this._isList;
    }
    public set IsList(value: boolean) {

        this._isList = value;
        if (value ===false) {
        
            this.editContact = this.model ? { ...this.model } : null; // Se è list, resetto il contatto da modificare
        } else {

            this.editContact = null; // Se è list, il contatto da modificare non mi serve
        }
    }

    // Event emitter che manderà alla list il contatto da modificare
    @Output()
    public inEdit: EventEmitter<ContactModel | undefined> = new EventEmitter<ContactModel | undefined>();

    // MAnderà alla list il contatto da eliminare
    @Output()
    public inDelete: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();

    @Output()
    public conctactModified: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();

    @Output()
    public inAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

    // Modello che verrà stampato
    @Input()
    public model: ContactModel | null = null;

    protected editContact: ContactModel | null = null;


    /* ---- IN LIST MODE ---- */

    // Mando al padre il contatto da modificare
    editMode(): void {

        if (this.model) {
            this.IsList = false; // Chiamo il setter che mi aggiorna l'edit contact
            this.inEdit.emit(this.model); // Mando il contatto specifico al padre
        }
    }

    deleteContact(): void {

        if (this.model) {

            this.inDelete.emit(this.model);
        }
    }

    /* ---- UNA VOLTA ENTRATO IN EDIT MODE ---- */

    // Cancella la modifica
    cancelEdit(): void { 

        this.IsList = true; // Tolgo l'edit mode dal contact
        this.inEdit.emit(undefined); // Tolgo l'edit mode dal padre
        this.inAdd.emit(false); // Tolgo l'add mode dal padre
    }

    // Salva la modifica
    saveEdit(): void {

        this.model = this.editContact; // Salvo la modifica

        this.IsList = true; // Tolgo l'edit mode dal contact
        this.inEdit.emit(undefined); // Tolgo l'edit mode dal padre

        // this.editContact?.id = this.model?.id; 
        this.conctactModified.emit(this.model!); // Mando al padre il contatto modificato

        console.log("Contatto modificato: " + JSON.stringify(this.model));

        if (this.IsAdd) {

            this.inAdd.emit(false);
        }
    }
}