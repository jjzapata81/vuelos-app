import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'help-pqr',
  templateUrl: './pqr.component.html',
  styleUrl: './pqr.component.css'
})
export class PqrComponent {

  pqrForm = this.fb.group({
    username : ['', [Validators.required]],
    comment : ['', [Validators.required]],
    fileTo : ['']
  })

  constructor(private fb:FormBuilder,
    private supabaseService:SupabaseService
  ){}
  onFileSelected(event:any){
    if(this.pqrForm.invalid){
      alert('El nombre y el comentario son obligatorios');
      this.pqrForm.reset();
      return;
    }
    const folderName = this.pqrForm.controls.username.value?.toLowerCase().replace(' ', '_');
    const file:File = event.target.files[0];
    this.supabaseService.upload(file, folderName).then(data=>{
      console.log(data);
      this.pqrForm.reset();
    });
  }
}
