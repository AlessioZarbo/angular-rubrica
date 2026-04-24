import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { Contact } from "../app-contact/contact";
import { ContactModel } from "../../../models/contactModel";


@Component({
    selector: 'app-list',
    imports: [Contact],
    templateUrl: './list.html',
    styleUrl: './list.css'
})
export class List {

    @Input()
    public contacts: ContactModel[] = [];
    
    /* ---- LIST FEATURE ---- */
    protected contactInEdit: ContactModel | undefined = undefined; // Contatto che è in edit mode, se è undefined, nessun contatto è in edit mode
    onEdit(contact: ContactModel | undefined): void { // Così capisco quale contatto si vuole modificare

        this.contactInEdit = contact;
        if (contact !== undefined) {

            this.inEdit.emit(true);
        } else {

            this.inEdit.emit(false);
        }
    }


    /* ---- ADD FEATURE ---- */
    private _isAdding: boolean = false;
    onAdding(isAdding: boolean): void {

        this.IsAdding = isAdding;
        this.inAdd.emit(isAdding);
    }
    @Input()
    public get IsAdding(): boolean {

        return this._isAdding;
    }
    public set IsAdding(value: boolean) {

        this._isAdding = value;
    }
    @Output()
    public inAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    public inEdit: EventEmitter<boolean> = new EventEmitter<boolean>();

    /* ---- DELETE FEATURE ---- */
    onDelete(contact: ContactModel): void {

        this.inDelete.emit(contact);
    }
    @Output()
    public inDelete: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();


    /* ---- MODIFY FEATURE ---- */
    protected emptyContact: ContactModel = {
        id: 0,
        name: '',
        surname: '', 
        email: '',
        phone: '',
        imgSrc: null
    };
    onModified(contact: ContactModel): void {

        this.conctactModified.emit(contact);
    }
    @Output()
    public conctactModified: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();
}