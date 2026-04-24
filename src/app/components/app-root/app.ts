import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../app-header/header';
import { List } from '../app-list/list';
import { Service } from '../../../services/service';
import { ContactModel } from '../../../models/contactModel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  // Array preso da service
  protected service = inject(Service);

  protected contacts: ContactModel[] = this.service.getContacts();

  // Feature Add
  protected isAdding: boolean = false;
  onAdding(isAdding: boolean): void {

    // console.log("Ho ricevuto empty contact" + JSON.stringify(emptyContact));
    this.isAdding = isAdding;
  }

  /* ---- SEARCH FEATURE ---- */
  // ricevo il search term ma non fa l'effettiva ricerca
  onSearch(searchTerm: string): void {

    this.contacts = this.service.getContactsBySearchTerm(searchTerm);
  }

  /* Operazioni sui conatti dal service */
  onEdit(contact: ContactModel): void {
    this.service.updateContact(contact);
  }

  // Stesso pricipio di edit
  onDelete(contact: ContactModel): void {

    this.service.deleteContact(contact);
    this.contacts = this.service.getContacts();
  }

  onModified(contact: ContactModel): void {

    if (this.isAdding === true) {
      
      this.service.addContact(contact);
      this.contacts = this.service.getContacts();
    } else {
      this.service.updateContact(contact);
      this.contacts = this.service.getContacts();
    }
  }

  onReload(reload: boolean): void {

    if (reload === true) {

      console.log("Ricarico i contatti");
      this.contacts = this.service.getContacts();
    }
  }
}
