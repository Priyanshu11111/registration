import {Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http:HttpClient) { }
  apiCall(){
    return this.http.get('http://127.0.0.1:8000/api/customers');
  }
  submitData(data:any)
  {
    console.log(data);
    return this.http.post('http://127.0.0.1:8000/api/customers',data);  
  }
}
