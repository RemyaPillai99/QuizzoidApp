import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication.guard';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path:'',component:WelcomeComponent},
  { path: 'quiz',component:QuizComponent, canActivate:[AuthenticationGuard]},
  { path: 'result',component:ResultComponent, canActivate:[AuthenticationGuard]}
  { path: 'welcome',component:WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
