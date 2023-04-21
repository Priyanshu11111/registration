import { Component,OnDestroy,OnInit  } from '@angular/core';
import{TypesService}from'../../app/types.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-typeslist',
  templateUrl: './typeslist.component.html',
  styleUrls: ['./typeslist.component.css']
})
export class TypeslistComponent implements OnInit, OnDestroy {
  constructor(private api:TypesService
    ,private toastr: ToastrService,private router:Router ){}
    users:any;
    a:any;
    types_data:any;
    pollSubscription: Subscription | undefined;

    ngOnInit():void{
      this.typelist();
      this.pollSubscription=interval(5000).subscribe(()=>{      
        this.typelist();
      })
    }
    
    ngOnDestroy(): void {
      this.pollSubscription?.unsubscribe();
    }
    typelist(){
      this.api.showTypeslist().subscribe((data)=>{
        this.users= data;
      })
    }
    deletetype(id:number){
      if (confirm("Are you sure you want to delete this user?")) {
        this.api.typesdelete(id).subscribe((data:any) => {
          this.users=this.users.filter((users:any) => users.id !==id);
        });
      }
    }
    edittype(id:number,data:any){
      this.api.edittype(id,data).subscribe((data:any) => {
        this.types_data=data;
    });
    this.router.navigate(['types/edit',id])
    }
}
