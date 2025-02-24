import { ChangeDetectorRef, Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { map } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  rowData: any;

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) { }

  
  ngOnInit(): void {
    this.dataService.getData().pipe(
      map(data => data.slice(0, 10)) // Get only first 10 items
    )
    .subscribe((data) => {
     this.rowData = data ;
    })
  }

  addData(){
    const newPost = { title: 'New Post', body: 'This is a new post', userId: 111 };
    this.dataService.saveData(newPost).subscribe((response) => {
      console.log("This is response" +response);
      this.rowData = [...this.rowData, response]; 
      this.cdr.markForCheck();
    })
  }
  
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'title' },
    { field: 'body' }
  ];
}
