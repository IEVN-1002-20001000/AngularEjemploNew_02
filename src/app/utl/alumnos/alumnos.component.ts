import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{
  imagewidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!:string;
  dataSource:any=[];

showImage():void{
  this.muestraImg=!this.muestraImg;
}
alumnosIric:AlumnosUtl[]=[
  {
    matricula:1234,
    nombre:'Pedro',
    apaterno:'Lopez',
    amaterno:'Muñoz',
    correo: 'pedro@gmail.com',
  },

  {
    matricula:2468,
    nombre:'Luis',
    apaterno:'Morales',
    amaterno:'Ruiz',
    correo: 'luis@gmail.com',
  },

  {
    matricula:7593,
    nombre:'Joselin',
    apaterno:'Escalante',
    amaterno:'Moreno',
    correo: 'joss10@gmail.com',
  }
]

ngOnInit(): void {
    this.dataSource=this.alumnosIric
}
}
