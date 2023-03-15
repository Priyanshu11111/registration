import {Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http:HttpClient,private router:Router) { }
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
    return this.http.put(`http://127.0.0.1:8000/api/customers/${id}`, data);
  }
  getCustomers(id:string){
    return this.http.get(`http://127.0.0.1:8000/api/customers/${id}`);
  }
  checkEmailExists(email: string) {
    return this.http.get(`http://127.0.0.1:8000/api/customers?email=${email}`);
  }
  authenticateUser(credentials: any) {
    return this.http.post('http://127.0.0.1:8000/api/customer/login', credentials);
  }
  setToken(token: string) :void{  
    localStorage.setItem('token', token);
  }
  getToken() :string|null{
    return localStorage.getItem('token');
  }
  IsloggedIn(){
    return localStorage.getItem('token') !== null;
  }
  setUserRole(role: number) {
    localStorage.setItem('userRole', role.toString());
  }
  getUserRole() {
    return localStorage.getItem('userRole');
  }
 /*  getUserRole(): string {
    return localStorage.getItem('role') || '';
  }
  setUserRole(role: string) {
    localStorage.setItem('role', role);
  } */
/*   logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  } */
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  assetCall(){
    return this.http.get('http://127.0.0.1:8000/api/asset');
  }
  submitAsset(data:any){
    return this.http.post('http://127.0.0.1:8000/api/asset',data); 
  }
}
