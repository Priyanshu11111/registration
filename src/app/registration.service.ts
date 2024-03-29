import {Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http'
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http:HttpClient,private router:Router) { }
  apiCall(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('http://127.0.0.1:8000/api/users',{headers});
  }
  submitData(data:any)  
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post('http://127.0.0.1:8000/api/users',data,{headers});  
  }
  deleteUser(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://127.0.0.1:8000/api/users/${id}`,{headers});
  }
  editUser(id: number, data: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/users/${id}`, { headers, params: data });
  }
  updateUser(id:number,data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://127.0.0.1:8000/api/users/${id}`, data,{headers});
  }
  checkEmailExists(email: string) {
    return this.http.get(`http://127.0.0.1:8000/api/users?email=${email}`);
  }
  markAsread(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://127.0.0.1:8000/api/markasread/${id}`,{},{ headers });
  }
  getLatestNotification() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('http://127.0.0.1:8000/api/notifications',{ headers });
  }
  getallnotification(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('http://127.0.0.1:8000/api/allnotifications',{ headers });
  }
  authenticateUser(credentials: any) {
    return this.http.post('http://127.0.0.1:8000/api/users/login', credentials);
  }
  setpermission(permissions: string):void{
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }
  setToken(token: string) :void{  
    localStorage.setItem('token', token);
    console.log(token)
  }
  getToken() :string|null{
    return localStorage.getItem('token');
  }
  IsloggedIn(){
    return localStorage.getItem('token') !== null;
    return localStorage.getItem('permission') !== null;
  }
 /*  setUserRole(role: number) {
    localStorage.setItem('userRole', role.toString());
  } */
  /* getUserRole() {
    return localStorage.getItem('userRole');
  } */
  getUserRole(): string {
    return localStorage.getItem('role') || '';
  }
  getpermission():string{
    return localStorage.getItem('permissions') || '';
  }
  setUserRole(role: string) {
    localStorage.setItem('role', role);
  }
/*   logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  } */
  logout() {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.router.navigate(['/login']);
    return this.http.post(`http://127.0.0.1:8000/api/logout`, null, { headers });
  }
  assetCall(){
    return this.http.get('http://127.0.0.1:8000/api/asset');
  }
  submitAsset(data:any){
    return this.http.post(`http://127.0.0.1:8000/api/asset`,data); 
  }
  changeProfile(data:any)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://127.0.0.1:8000/api/profile`,data, { headers });
  }
  getAuthorizedUser(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/profile`, { headers });
  }
  generaterefreshtoken(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let input={
      'token': this.getToken(),
      'refreshtoken': this.refreshToken()
    }
    return this.http.post('http://127.0.0.1:8000/api/refresh',input,{ headers })
  }
  SaveTokens(token:any,refreshToken: any){
    localStorage.setItem('token',token);
    localStorage.setItem('refreshToken',refreshToken);
  }
  setrefreshtoken(refreshToken:string):void{
    localStorage.setItem('refreshToken', refreshToken);
}
  refreshToken():string|null{
    return localStorage.getItem('refreshToken');
  }
  showactivitylog(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/activitylog`, { headers });
  }
  createroles(data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://127.0.0.1:8000/api/rolecreate`,data, { headers });
  }
  getRoles(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/getrole`, { headers });
  }
}
