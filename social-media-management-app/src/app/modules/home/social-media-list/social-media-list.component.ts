import { Component, OnInit } from '@angular/core';
import { Crud } from 'src/app/core/models/crud';
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

  columns: string[] = ['sosyal medya linki','sosyal medya adı', 'açıklama'];

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.getAccounts().subscribe((res) => {
      this.accounts= res;
      console.log(this.accounts);
    });
  }

  createNewAccount(){
    this.crudService.createNewAccount(this.account).subscribe(
      data => console.log(data)
    )
  }

  updateAccount(){
    this.crudService.updateAccount(this.account).subscribe(
      data => console.log(data)
    )
  }

  deleteTask(id:string){
    this.crudService.deleteAccount(id).subscribe();
  }

}
