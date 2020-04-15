import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  hasil=0;
  tof='';
  tampilan='';
  ClickPattern(input1, input2){
    var angka1 = input1;
    var angka2 = input2;
    var pangkat = Math.pow(angka1, angka2);
    this.hasil=pangkat;
    if(pangkat % 2 == 0){
      this.tof='Genap';
      this.tampilan=''
      for(let i = angka2; i <= pangkat; i ++){
        for(let v = 0; v < i; v ++){
          this.tampilan+='*';
        }
        this.tampilan+='\n'
      }
    } else{
      this.tof="Ganjil";
      this.tampilan=''
      for(let i = 0; i <= angka2; i ++){
        for(let v = angka2; v > i; v --){
          this.tampilan+='*';
        }
        for(let j = 0; j < i + 1 && i < angka1; j ++){
          this.tampilan+='0';
        }
        this.tampilan+='\n'
      }
    }
  }
}
