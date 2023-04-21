import { Component } from '@angular/core';
import{RegistrationService}from'../../app/registration.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';

@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css']
})
export class ActivitylogComponent {
  constructor(private api:RegistrationService
  ){}
  users:any;
  a:any;
  myData: any;
  
  
  ngOnInit():void{
    this.api.showactivitylog().subscribe((data)=>{
      this.users= data;
      this.myData = data;
    })
  }
  
  exportToExcel(): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.myData.map((user:any)=>({
    ...user,
    created_at: moment.utc(user.created_at).local().format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment.utc(user.updated_at).local().format('YYYY-MM-DD HH:mm:ss')
  })));
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  FileSaver.saveAs(data, 'myData.xlsx');
  }
}
