import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SocialMediaListComponent } from "src/app/modules/home/social-media-list/social-media-list.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        SocialMediaListComponent
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
],
    exports: [
        SocialMediaListComponent
    ]
})
export class HomeModule{

}