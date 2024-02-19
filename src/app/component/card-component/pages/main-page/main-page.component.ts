import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',

  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private _Router:Router)
  {
  }
  @Input() cards :any = "";
  isSelected:boolean= false;
  select:any;
  currentElement:any;
  arr: any[]=[];
  selectCard(card: any,i:number ){
    this.cards.forEach((c: { isSelected: boolean; }) => this.isSelected = false);
    card.isSelected = true;
    this.isSelected = true;
    this.currentElement = this.cards[i]
  }
  okButton()
  {
    console.log(this.currentElement)
    if(this.currentElement != undefined)
    {
      this.arr.push(this.currentElement);
    }
    console.log(this.arr);
    this._Router.navigateByUrl('/dashboard')
  }
}
