import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, NgModel } from '@angular/forms';
import { Crud } from 'src/app/core/models/crud';
import { Sorting } from 'src/app/core/models/sorting';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-social-media-list',
  templateUrl: './social-media-list.component.html',
  styleUrls: ['./social-media-list.component.scss'],
  providers: [CrudService]
})
export class SocialMediaListComponent implements OnInit {
  
  accounts: Crud[];

  account: Crud;

  sorting: Sorting = {
    order: "asc"
  }

  searchValue: string = '';

  searchForm = this.fb.nonNullable.group({
    searchValue: ''
  });

  columns: string[] = ['sosyal medya linki','sosyal medya adı', 'açıklama', ''];

  page: number = 1; 

  currentPage: number = 1;

  limit:number = 8;

  totalPages:number = 4;

  open:boolean = false;

  model:Crud = {} as Crud;

  editing: boolean = false;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }
  
  getAccounts(){
    this.crudService.getAccounts(
      this.sorting,
      this.searchValue,
      this.page=this.currentPage,
      this.limit)
      .subscribe(data => {
        this.accounts = data;
      });
      }
  
  isDescSorting(): boolean{
    return  this.sorting.order === 'desc';
  }

  isAscSorting(): boolean{
    return  this.sorting.order === 'asc';
  }

  sort(): void{
    const sortingOrder = this.isDescSorting() ? 'asc':'desc';
    this.sorting ={
      order: sortingOrder
    };
    this.getAccounts();
  }

  onSearchSubmit(): void{ //liste içerisinde search inputun da submit olunduğunda arama yapar
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.getAccounts();
  }
  
  changeSearchValue(eventData: Event){
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    this.getAccounts();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getAccounts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getAccounts();
    }
  }

  hideModal(){
    this.open = false;
  }

  newAccount(){ // Yeni hesap eklemek için modalı açar
    this.open = true;
  }
  
  editAccount(crud: Crud){ //Varolan bir hesabı güncellemeyi sağlayan modalı açar
    this.open = true;
    this.editing = true;
    this.model = crud;
  }

  deleteAccount(_id: string){
    this.crudService.deleteAccount(_id).subscribe(x => {
      confirm("Hesabı silmek istadiğinizden emin misiniz?");
      alert("Hesap Silindi.")
    });
    this.getAccounts();
  }

  changeLimit(e:any){
    this.limit = e.target.value;
    this.getAccounts();
  }
}
