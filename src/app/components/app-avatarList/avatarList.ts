import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { AvatarService } from "../../../services/avatarService";
import { Avatar } from "../app-avatar/avatar";
import { AvatarModel } from "../../../models/avatarModel";
import { ContactModel } from "../../../models/contactModel";

@Component({
    selector: 'app-avatarList',
    imports: [Avatar],
    templateUrl: './avatarList.html',
    styleUrl: './avatarList.css'
})
export class AvatarList {

    protected avatarService = inject(AvatarService);

    @Input()
    public contact: ContactModel | null = null;

    @Input()
    public activeAvatarUrl: string | null = null;

    @Output()
    public activeAvatarUrlChange = new EventEmitter<string>();

    onActive(activeAvatar: AvatarModel): void {

        this.activeAvatarUrl = activeAvatar.imgSrc;
        this.activeAvatarUrlChange.emit(this.activeAvatarUrl);
    }
}