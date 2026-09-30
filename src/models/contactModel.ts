export interface ContactModel {
    
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    priority: boolean;
    imgSrc: string | null;
}