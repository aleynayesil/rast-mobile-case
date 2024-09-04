import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Crud } from 'src/app/core/models/crud';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() hideModalEvent = new EventEmitter<void>();
  
  @Input() model: Crud = {} as Crud;
  
  @Input() editing: boolean = false;

  searchForm = this.fb.nonNullable.group({
    searchValue: ''
  });

  constructor(
    private crudService:CrudService,
    private fb : FormBuilder
  ) {}

  ngOnInit(): void {
  }

  hideModal(){
    this.hideModalEvent.emit();
  }
  
  saveModal(){
    this.crudService.createNewAccount(this.model).subscribe();
    this.hideModal();
    alert("Hesap Kaydedildi");
    window.location.reload();
  }

  updateAccount(_id:string, crud:Crud){
    this.crudService.updateAccount(crud,_id).subscribe();
    this.hideModal(); 
    alert("Hesap Bilgileri Güncellendi");
    window.location.reload();
  }
}
