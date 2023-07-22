import{HttpClient,HttpHeaders}from '@angular/common/http'
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http:HttpClient,private router:Router) { }
  models(data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://127.0.0.1:8000/api/models`,data, { headers });
  }
  getmodels(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/models`, { headers });
  }
  deletemodels(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://127.0.0.1:8000/api/models/${id}`, { headers });
  }
  editModel(id:number,data:any){
     const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/models/${id}`,{ headers, params: data });
  }
  updateModel(id:number,data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://127.0.0.1:8000/api/models/${id}`,data,{headers});
  }
  viewmodel(id:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/viewmodel/${id}`,{ headers});
  }
  createasset(data:any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://127.0.0.1:8000/api/asset`,data, { headers });
  }
  showasset(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/asset`, { headers });
  }
  editasset(id:number,data:any){
    const token = localStorage.getItem('token');
   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   return this.http.get(`http://127.0.0.1:8000/api/asset/${id}`,{ headers, params: data });
 }
 updateasset(id:number,data:any){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.put(`http://127.0.0.1:8000/api/asset/${id}`,data,{headers});
 }
 deleteaasset(id:number){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.delete(`http://127.0.0.1:8000/api/asset/${id}`,{headers});
 }
 authasset(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get(`http://127.0.0.1:8000/api/assetshow`,{headers});
 }
}
