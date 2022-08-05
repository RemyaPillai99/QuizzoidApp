import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, private quizService: QuizServiceService) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.currentQuestion = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.questionList = JSON.parse(localStorage.getItem('questionList'));
      if (this.quizService.currentQuestion == this.quizService.questionList.length)
        this.router.navigate(['/result']);
      else
        this.startTimer();
    }
    else {
      this.quizService.seconds = 0;
      this.quizService.currentQuestion = 0;

      this.loadQuestions()
    }
  }

  loadQuestions() {
    this.quizService.getQuestionJson()
      .subscribe(
        (res: any) => {
          console.log(res.questions)
          this.quizService.questionList = res.questions;
          console.log(this.quizService.questionList);
          this.startTimer();
        });

  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);  //function will be called in every second
  }

  nextQuestion() {
    this.quizService.currentQuestion++
  }

  previousQuestion() {
    this.quizService.currentQuestion--
  }

  handleSubmit() {
    localStorage.setItem('timeElapsed', this.quizService.displayTimeElapsed());
    this.router.navigate(['/result']);
  }

  answer(currentQno, option) {
    this.quizService.questionList[this.quizService.currentQuestion].selected = option._id;//selected option
    console.log("Answer Option Id: " + this.quizService.questionList[this.quizService.currentQuestion].answer + " Id Selected: " + option._id + " selected answer: " + this.quizService.questionList[this.quizService.currentQuestion].selected);
    localStorage.setItem('questionList', JSON.stringify(this.quizService.questionList));
    //this.quizService.currentQuestion++; //use to goto next question on click  
    localStorage.setItem('qnProgress', currentQno);
    if (this.quizService.currentQuestion == this.quizService.questionList.length) {
      localStorage.setItem('timeElapsed', this.quizService.displayTimeElapsed());
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }

  }

}
