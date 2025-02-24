import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { delay, map, Observable, of, retry } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiUrl = "https://jsonplaceholder.typicode.com/posts";

    private http = inject(HttpClient);

    private mockData = [
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Banana', category: 'Fruit' },
        { id: 3, name: 'Carrot', category: 'Vegetable' },
        { id: 4, name: 'Spinach', category: 'Vegetable' },
        { id: 5, name: 'Orange', category: 'Fruit' },
        { id: 6, name: 'Broccoli', category: 'Vegetable' },
        { id: 7, name: 'Strawberry', category: 'Fruit' },
        { id: 8, name: 'Potato', category: 'Vegetable' },
        { id: 9, name: 'Grapes', category: 'Fruit' },
        { id: 10, name: 'Tomato', category: 'Vegetable' }
    ];

    getData(): Observable<any>{
        return this.http.get<any>(this.apiUrl);
    }

    saveData(savedData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, savedData);
    }


    fetchData(search:string, category: string): Observable<any[]> {
        return of(this.mockData).pipe(
          map(items => 
            items.filter(item => 
              item.name.toLowerCase().includes(search.toLowerCase()) &&
              (category == "All" || item.category == category)
            ) 
          )
        )
    }

}