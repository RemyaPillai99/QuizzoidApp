import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  isLoggedIn(){  
    console.log("name: "+localStorage.getItem('participantName'));
    return !!localStorage.getItem('participantName');  //a double negation: ! returns true if the object is null, undefined or an empty string and false otherwise.
    // If you negate it again you get true for values that exist and false for the ones that do not.
    }  
}
