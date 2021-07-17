import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    {titular: 'Juan Perez', numeroTarjeta: '1234654398761598', fechaExpiracion: '11/21', cvv:'123' },
    {titular: 'Miguel Gonzalez', numeroTarjeta: '1234665988761598', fechaExpiracion: '02/21', cvv:'123'},
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
   }

   ngOnInit(): void {
  }
  //ACA CREO EL OBJ QUE TENDRÁ LOS DATOS DE LA TARJETA INGRESADA EN EL FORMULARIO Y LO IMPRIMO
  agregarTarjeta(){
     const tarjeta: any = {
       titular: this.form.get('titular')?.value,
       numeroTarjeta: this.form.get('numeroTarjeta')?.value,
       fechaExpiracion: this.form.get('fechaExpiracion')?.value,
       cvv: this.form.get('cvv')?.value,
     }
     //console.log(tarjeta);
     this.listTarjetas.push(tarjeta);
     this.toastr.success('La Tarjeta fue registrada con éxito', 'Tarjeta Registrada');
     this.form.reset();
  }

  eliminarTarjeta(index: number){
    this.listTarjetas.splice(index,1);
    this.toastr.error('La Tarjeta fue eliminada con éxito', 'Tarjeta Eliminada');
  }

}
