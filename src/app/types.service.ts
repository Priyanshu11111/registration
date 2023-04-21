import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http'
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http:HttpClient,private router:Router) { }
  createTypes(data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://127.0.0.1:8000/api/types`,data, { headers });
  }
  typesdelete(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://127.0.0.1:8000/api/types/${id}`,{ headers });
  }
  showTypeslist(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/types`,{ headers });
  }
  edittype(id:number,data:any){    
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/types/${id}`,{ headers, params: data });
  }
  updatetype(id:number,data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://127.0.0.1:8000/api/types/${id}`, data, { headers });
  }
  getTypesName(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/gettype/${id}`,{headers});
  }
}
