import { Component } from '@angular/core';
import { Info2 } from 'src/app/services/test.service';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class trabajoComponent {
 
  constructor (private Info1: Info2){}

  ngOnInit(){
    this.getInfo3()
  }


  getInfo3(){
    this.Info1.getInfo()
    .subscribe(data=>{
      console.log(data);
    
    })
  }
}

