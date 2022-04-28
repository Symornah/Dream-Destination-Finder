import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  random:boolean=false;

  constructor(private http: HttpClient) {
    
   }

   PostData(questions:any):Observable<any>{
     return this.http.post('http://localhost:3000/create',questions);
   }
   //practice
   SumData(numbers:any):Observable<any>{
    return this.http.post('http://localhost:3000/sum',numbers);
  }
   GetData():Observable<any>{
     return this.http.get('http://localhost:3000/listings');
   }

   TempData():Observable<any>{
    return this.http.post('http://localhost:3000/data',{});
  }
  GetTrips(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/locations',data);

  }
  userLogin(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/login',data);

  }
}
