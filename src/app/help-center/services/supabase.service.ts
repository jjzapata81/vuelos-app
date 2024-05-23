import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  //private supabase: SupabaseClient;
  constructor() {
    /*this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.secret
    );*/
  }

  async upload(file:File, folderName:string = 'base'){
   /* const { error } = await this.supabase
      .storage
      .from('pqrs')
      .upload(`${folderName}/${file.name}`, file);
    if(error){
      alert(error.message);
      return;
    }

    const { data } = await this.supabase
      .storage
      .from('pqrs')
      .getPublicUrl(`${folderName}/${file.name}`)
    return data.publicUrl;*/
  }
}
