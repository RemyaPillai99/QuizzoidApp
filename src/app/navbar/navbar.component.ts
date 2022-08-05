import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private quizService:QuizServiceService, private router: Router) { }

  ngOnInit() {
  }

  SignOut() {
    localStorage.clear();
    clearInterval(this.quizService.timer);
    this.router.navigate(['/welcome']);
  }

}
