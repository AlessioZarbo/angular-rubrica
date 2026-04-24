import { Injectable } from "@angular/core";
import { ContactModel } from "../models/contactModel";

@Injectable({
    providedIn: 'root'
})
export class Service {

    // Variabile locale che contiene i contatti
    public contacts: ContactModel[] = [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            email: "jhondoe@example.com",
            phone: "3471122334",
            imgSrc: "avatar/maschi/tipo1.png"
        },
        {
            id: 2,
            name: "Alice",
            surname: "Smith",
            email: "alice.smith@example.com",
            phone: "3456789123",
            imgSrc: "avatar/femmine/tipa1.png"
        },
        {
            id: 3,
            name: "Marco",
            surname: "Rossi",
            email: "marco.rossi@example.com",
            phone: "3471122334",
            imgSrc: "avatar/maschi/tipo2.png"
        },
        {
            id: 4,
            name: "Luca",
            surname: "Bianchi",
            email: "luca.bianchi@example.com",
            phone: "3482233445",
            imgSrc: "avatar/maschi/tipo3.png"
        },
        {
            id: 5,
            name: "Giulia",
            surname: "Verdi",
            email: "giulia.verdi@example.com",
            phone: "3493344556",
            imgSrc: "avatar/femmine/tipa1.png"
        },
        {
            id: 6,
            name: "Davide",
            surname: "Neri",
            email: "davide.neri@example.com",
            phone: "3504455667",
            imgSrc: "avatar/maschi/tipo4.png"
        },
        {
            id: 7,
            name: "Sara",
            surname: "Conti",
            email: "sara.conti@example.com",
            phone: "3515566778",
            imgSrc: "avatar/femmine/tipa2.png"
        },
        {
            id: 8,
            name: "Francesco",
            surname: "Galli",
            email: "francesco.galli@example.com",
            phone: "3526677889",
            imgSrc: "avatar/maschi/tipo5.png"
        },
        {
            id: 9,
            name: "Elena",
            surname: "Ferri",
            email: "elena.ferri@example.com",
            phone: "3537788990",
            imgSrc: "avatar/femmine/tipa3.png"
        },
        {
            id: 10,
            name: "Andrea",
            surname: "Colombo",
            email: "andrea.colombo@example.com",
            phone: "3548899001",
            imgSrc: "avatar/maschi/tipo6.png"
        },
        {
            id: 11,
            name: "Matteo",
            surname: "Ricci",
            email: "matteo.ricci@example.com",
            phone: "3559900112",
            imgSrc: "avatar/maschi/tipo7.png"    
        },
        {
            id: 12,
            name: "Chiara",
            surname: "Romano",
            email: "chiara.romano@example.com",
            phone: "3561011223",
            imgSrc: "avatar/femmine/tipa8.png"
        },
        {
            id: 13,
            name: "Simone",
            surname: "Greco",
            email: "simone.greco@example.com",
            phone: "3572122334",
            imgSrc: "avatar/maschi/tipo8.png"
        },
        {
            id: 14,
            name: "Federica",
            surname: "Bruno",
            email: "federica.bruno@example.com",
            phone: "3583233445",
            imgSrc: "avatar/femmine/tipa4.png"
        },
        {
            id: 15,
            name: "Alessandro",
            surname: "Moretti",
            email: "alessandro.moretti@example.com",
            phone: "3594344556",
            imgSrc: "avatar/maschi/tipo9.png"
        },
        {
            id: 16,
            name: "Martina",
            surname: "Lombardi",
            email: "martina.lombardi@example.com",
            phone: "3605455667",
            imgSrc: "avatar/femmine/tipa5.png"
        },
        {
            id: 17,
            name: "Giorgio",
            surname: "Rizzo",
            email: "giorgio.rizzo@example.com",
            phone: "3616566778",
            imgSrc: "avatar/maschi/tipo2.png"
        },
        {
            id: 18,
            name: "Valentina",
            surname: "De Luca",
            email: "valentina.deluca@example.com",
            phone: "3627677889",
            imgSrc: "avatar/femmine/tipa6.png"
        },
        {
            id: 19,
            name: "Antonio",
            surname: "Esposito",
            email: "antonio.esposito@example.com",
            phone: "3638788990",
            imgSrc: "avatar/maschi/tipo1.png"
        },
        {
            id: 20,
            name: "Laura",
            surname: "Fontana",
            email: "laura.fontana@example.com",
            phone: "3649899001",
            imgSrc: "avatar/femmine/tipa7.png"
        },
        {
            id: 21,
            name: "Stefano",
            surname: "Villa",
            email: "stefano.villa@example.com",
            phone: "3650900112",
            imgSrc: "avatar/maschi/tipo3.png"
        }
    ];

    // GET
    getContacts(): ContactModel[] { 

        return ([] as Array<ContactModel>).concat(this.contacts);
    }

    getContactsBySearchTerm(searchTerm: string): ContactModel[] {

        var result = ([] as Array<ContactModel>).concat(this.contacts.filter(contact =>

            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.surname.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        return result; 
    }

    // POST
    addContact(contact: ContactModel): void { 

        this.contacts.push(contact);
    }

    // PUT
    updateContact(contact: ContactModel): void { 

        if (contact === undefined) return;  // Nell'event emitter certe volte passo undefined
        // Controllo aggiuntivo extra
        var result = this.contacts.find(c => c.id === contact.id);
        if (result === undefined) return;

        const index = this.contacts.findIndex(c => c.id === contact.id);
        if (index !== -1) {
            this.contacts[index] = contact;
        }
    }

    // DELETE
    deleteContact(contact: ContactModel): void { 

        if (contact === undefined) return;
        // Controllo aggiuntivo extra
        var result = this.contacts.find(c => c.id === contact.id);
        if (result === undefined) return;

        this.contacts = this.contacts.filter(c => c.id !== contact.id);
        
    }
}