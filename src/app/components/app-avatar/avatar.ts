import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AvatarModel } from "../../../models/avatarModel";
import { ContactModel } from "../../../models/contactModel";

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.html',
    styleUrl: './avatar.css'
})
export class Avatar {

    @Input()
    public avatar: AvatarModel | null = null;

    @Input()
    public contact: ContactModel | null = null;

    @Input()
    public activeAvatarUrl: string | null = null;

    @Output()
    public inActiveAvatarUrl = new EventEmitter<AvatarModel>();

    inActive(): void {

        if (this.avatar) {

            this.inActiveAvatarUrl.emit(this.avatar);
        }

        if (this.contact) {

            this.inActiveAvatarUrl.emit({ id: 0, imgSrc: '' });
        }
    }
}