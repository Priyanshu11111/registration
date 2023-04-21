import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showrequests',
  templateUrl: './showrequests.component.html',
  styleUrls: ['./showrequests.component.css']
})
export class ShowrequestsComponent {
  constructor(private request:RequestService,public router:ActivatedRoute){}
  showrequests:any
  ngOnInit():void{
    this.showrequests=new FormGroup({
      "types":new FormControl,
      "model": new FormControl,
      "requestreason":new FormControl,
    })
    this.router.params.subscribe((params)=>{
      this.showrequest(params["id"])
  })
  }
  showrequest(id:number){
    this.request.showrequest(id).subscribe((data:any) =>{
      this.request=data;
      console.log(data);
      this.showrequests.patchValue({
        types: this.request.show.type.name,
        model: this.request.show.model.name,
        requestreason: this.request.show.requestreason,
      });
      console.log(this.request.show.model)
    })
  }
}

