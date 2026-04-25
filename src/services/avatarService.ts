import { Injectable } from "@angular/core";
import { AvatarModel } from "../models/avatarModel";

@Injectable({
    providedIn: 'root'
})
export class AvatarService {

    public avatars: AvatarModel[] = [
        {
            id: 1,
            imgSrc: "avatar/maschi/tipo1.png"
        },
        {
            id: 2,
            imgSrc: "avatar/maschi/tipo2.png"
        },
        {
            id: 3,
            imgSrc: "avatar/maschi/tipo3.png"
        },
        {
            id: 4,
            imgSrc: "avatar/maschi/tipo4.png"
        },
        {
            id: 5,
            imgSrc: "avatar/maschi/tipo5.png"
        },
        {
            id: 6,
            imgSrc: "avatar/maschi/tipo6.png"
        },
        {
            id: 7,
            imgSrc: "avatar/maschi/tipo7.png"
        },
        {
            id: 8,
            imgSrc: "avatar/maschi/tipo8.png"
        },
        {
            id: 9,
            imgSrc: "avatar/maschi/tipo9.png"
        },
        {
            id: 10,
            imgSrc: "avatar/maschi/tipo10.png"
        },
        {
            id: 11,
            imgSrc: "avatar/femmine/tipa1.png"
        },
        {
            id: 12,
            imgSrc: "avatar/femmine/tipa2.png"
        },
        {
            id: 13,
            imgSrc: "avatar/femmine/tipa3.png"
        },
        {
            id: 14,
            imgSrc: "avatar/femmine/tipa4.png"
        },
        {
            id: 15,
            imgSrc: "avatar/femmine/tipa5.png"
        },
        {
            id: 16,
            imgSrc: "avatar/femmine/tipa6.png"
        },
        {
            id: 17,
            imgSrc: "avatar/femmine/tipa7.png"
        },
        {
            id: 18,
            imgSrc: "avatar/femmine/tipa8.png"
        },
        {
            id: 19,
            imgSrc: "avatar/femmine/tipa9.png"
        }
    ];

    getAvatars(): AvatarModel[] {

        return ([] as Array<AvatarModel>).concat(this.avatars);
    }
}