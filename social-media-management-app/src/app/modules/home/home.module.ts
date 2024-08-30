import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SocialMediaListComponent } from "src/app/modules/home/social-media-list/social-media-list.component";

@NgModule({
    declarations: [
        SocialMediaListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SocialMediaListComponent
    ]
})
export class HomeModule{

}