import {Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http'


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
    return this.http.post('http://127.0.0.1:8000/api/customers',data);  
  }
  deleteUser(id: number) {
    return this.http.delete(`http://127.0.0.1:8000/api/customers/${id}`);
  }
  editUser(id: number, data: any) {
    return this.http.get(`http://127.0.0.1:8000/api/customers/${id}`, data);
  }
  updateUser(id:number,data:any){
    return this.http.put(`http://127.0.0.1:8000/api/customers/${id}`, data)
  }
  checkEmailExists(email: string) {
    return this.http.get(`http://127.0.0.1:8000/api/customers?email=${email}`);
  }
}
