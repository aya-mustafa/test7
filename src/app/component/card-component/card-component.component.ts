import { Component } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent {
  constructor()
  {
    
  }
  cards=
  [
    {
      icon : "fa-solid fa-screwdriver-wrench",
      name : "صيانة السيارة"
    },
    {
      icon : "fa-solid fa-car",
      name : " احقيقه خصم تأمين ايارات ",
    },
    {
      icon : "fa-solid fa-scale-balanced",
      name : " بلاغ عن احتيال",
    },
    {
      icon : "fa-solid fa-car-burst",
      name : " الأبلاغ عن حادث",
    },
    {
      icon : "fa-solid fa-car",
      name : " ملخص تقييم الأضرار",
    },
    {
      icon : "fa-solid fa-scale-balanced",
      name :"بلاغ عن احتيال",
    },
    {
      icon : "fa-solid fa-car-burst",
      name : " الأبلاغ عن حادث",
    },
    {
      icon : "fa-solid fa-screwdriver-wrench",
      name : "صيانة السيارة"
    },
    {
      icon : "fa-solid fa-car",
      name : " احقيقه خصم تأمين السيارات ",
    },
    {
      icon : "fa-solid fa-car",
      name : " ملخص تقييم الأضرار",
    },
  ]
}
