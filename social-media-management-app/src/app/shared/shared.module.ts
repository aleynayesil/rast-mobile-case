import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SummaryPipe } from "./pipes/summary.pipe";
import { LinkDirective } from "./directives/link-validator.directive";

@NgModule({
    declarations: [
        NavbarComponent,
        ModalComponent,
        SummaryPipe,
        LinkDirective
    ],
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    exports: [
        NavbarComponent,
        ModalComponent,
        SummaryPipe,
        LinkDirective
    ]
})
export class SharedModule{

}