import { Component } from '@angular/core';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public fotoe:FotoService){}
  tes="";
  num=0;
  tebakangka(){
    var number = Math.floor(Math.random()*2) + 1;
    alert(number);
    if(this.num == number){
     this.tes="correct";
    }
    else{
      this.tes="salah"
    }
  } 
}
