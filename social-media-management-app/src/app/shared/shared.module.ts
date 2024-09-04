import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SummaryPipe } from "./pipes/summary.pipe";
import { EmailDirective } from "./directives/link-validator.directive";

@NgModule({
    declarations: [
        NavbarComponent,
        ModalComponent,
        SummaryPipe,
        EmailDirective
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
        EmailDirective
    ]
})
export class SharedModule{

}