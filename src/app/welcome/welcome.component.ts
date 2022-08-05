import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userName:string;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(f: NgForm){
    localStorage.clear();
    console.log(f.value.userName);
    console.log(this.userName); // directly or using ngForm
    localStorage.setItem('participantName',f.value.userName.toString());
    this.router.navigate(['/quiz']);
  }
}
