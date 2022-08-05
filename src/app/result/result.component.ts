import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private quizService: QuizServiceService, private router: Router) { }

  ngOnInit() {
     // if (parseInt(localStorage.getItem('qnProgress')) == this.quizService.questionList.length) {
          this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
          this.quizService.currentQuestion = parseInt(localStorage.getItem('qnProgress'));
          this.quizService.questionList = JSON.parse(localStorage.getItem('questionList'));

        this.quizService.currentAnswerCount = 0;
        this.quizService.questionList.forEach((element) => {
          if(element.answer == element.selected)
            this.quizService.currentAnswerCount++;
          

        });
    // }else{
    //   this.router.navigate(['/quiz']);
    // }
  }

  restart(){
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('questionList', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }
}
