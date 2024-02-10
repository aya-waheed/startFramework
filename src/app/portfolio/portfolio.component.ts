import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  images:string[] = [
   
  './assets/images/poert1.png' ,

  './assets/images/port2.png' ,

  './assets/images/port3.png'

  ]


 showImage(image:string){
   
   
  Swal.fire({

    imageUrl: image ,
    imageWidth: '100%',

    imageAlt: "Custom image" ,

    backdrop: `
    rgba(0,0,123,0.4)
    
  ` ,

  showConfirmButton: false , 

  padding:0


  });


}  

}
