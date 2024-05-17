import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.secret
    );
  }

  async upload(file:any, folderName:string = 'base'){
    const { error } = await this.supabase
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
    return data.publicUrl;
  }
}
