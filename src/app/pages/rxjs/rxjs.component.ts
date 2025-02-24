import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../services/data.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: false,
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

  search$ = new BehaviorSubject<string>(''); 
  category$ = new BehaviorSubject<string>('All');
    
  constructor(public dataService: DataService) {}
  
  results$ = combineLatest([this.search$, this.category$]).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(([search, category]) => this.dataService.fetchData(search, category))
  );
  
  updateSearch(value: string) {
    this.search$.next(value);
  }
  
  updateCategory(value: string) {
    this.category$.next(value);
  }
  

}
