export interface User{
  email:string;
  id:number;
  isActive:boolean;
  name:string
  roles:string[];
}


export interface UserResponse {
  token:string;
  user:User;
}
