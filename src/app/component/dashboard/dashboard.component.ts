import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor()
  {
   
  }
  today: number = Date.now();
  items: any[]=[
    {type:"شكوي1",date:this.today,city:"الرياض",leaderCity:"اداره الشكاوي",status:"تم قبولها"},
    {type:"شكوي2",date:this.today,city:"الرياض",leaderCity:"اداره الشكاوي",status:"تم قبولها"},
    {type:"شكوي3",date:this.today,city:"الرياض",leaderCity:"اداره الشكاوي",status:"تم قبولها"},
    {type:"شكوي4",date:this.today,city:"الرياض",leaderCity:"اداره الشكاوي",status:"تم قبولها"},
    {type:"5شكوي",date:this.today,city:"الرياض",leaderCity:"اداره الشكاوي",status:"تم قبولها"},
    {type:"شكوي6",date:this.today,city:"الرياض",leaderCity:"اداره الشكاوي",status:"تم قبولها"}

  ]; 
  p: number = 1; // Current page number
  pageSize: number = 3; // Number of items to display per page
}
