import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http'
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http:HttpClient,private router:Router) { }
  supplier(data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://127.0.0.1:8000/api/supplier`,data, { headers });
  }
  supplierlist(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/supplier`, { headers });
  }
  deletesupplier(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://127.0.0.1:8000/api/supplier/${id}`, { headers });
  }
  editsupplier(id:number,data:any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/supplier/${id}`,{ headers, params: data })
  }
  updatesupplier(id:number,data:any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://127.0.0.1:8000/api/supplier/${id}`,data,{headers})
  }
}
