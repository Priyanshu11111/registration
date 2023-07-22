import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http:HttpClient) { }
  getmodules(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get('http://127.0.0.1:8000/api/modules',{ headers });  
  }
  createpermission(data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://127.0.0.1:8000/api/createpermission`,data,{ headers })
  }
  showpermission(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/getpermissions`,{ headers })
  }
  deletepermission(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://127.0.0.1:8000/api/delete/${id}`,{headers});
  }
}
