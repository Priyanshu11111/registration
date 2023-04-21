import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  show: any;

  constructor(private http:HttpClient) { }
  
  request(data: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://127.0.0.1:8000/api/request`,data, { headers });
  }
  getrequest(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/get`,{headers})
  }
  status(id:number,data:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://127.0.0.1:8000/api/action/${id}`,data,{headers})
  }
  requestlist(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/requestlist`,{headers})
  }
  gettypename(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/gettype/${id}`,{headers})
  }
  getmodelname(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/name/${id}`,{headers})
  }
  showrequest(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`http://127.0.0.1:8000/api/getrequest/${id}`,{ headers})
  }
}
