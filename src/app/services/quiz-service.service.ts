import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  //-------- shared Properties------

  public questionList: any = [];
  public seconds: number;
  public timer;
  public currentQuestion;
  public currentAnswerCount: number = 0;


  constructor(private http: HttpClient) { }

  getParticipantName() {
     return localStorage.getItem('participantName');
    
  }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getTimeElapsed() {
    return localStorage.getItem('timeElapsed');
  }


  getQuestionJson() {
    return this.http.get<any>('/assets/typeScript.json');
  }


}
