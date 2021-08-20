import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getLoggedUser(){
    return {
      name: 'Sebastian',
      lastName: 'Chicoma'
    }
  }
}
