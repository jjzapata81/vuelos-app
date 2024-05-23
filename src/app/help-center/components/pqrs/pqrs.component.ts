import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'help-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrl: './pqrs.component.css'
})
export class PqrsComponent {


  pqrForm = this.fb.group({
    username : ['', [Validators.required]],
    comment : ['', [Validators.required]],
    fileTo : ['']
  })

  constructor(private fb:FormBuilder
  ){}


  onFileSelected(event:any){
    if(this.pqrForm.invalid){
      alert('El nombre y el comentario son obligatorios');
      this.pqrForm.reset();
      return;
    }
    const folderName = this.pqrForm.controls.username.value?.toLowerCase().replace(' ', '_');
    const file:File = event.target.files[0];
    console.log(file);
    this.pqrForm.reset();
    /*this.supabaseService.upload(file, folderName).then(data=>{
      console.log(data);
      this.pqrForm.reset();
    });*/
  }

}
