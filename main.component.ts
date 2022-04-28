import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  answer={
    answer1:null,
    answer2:null,
    answer3:null,
  }
  question={
    question1:"Do you prefer City or Countryside?",
    question2:"Do you prefer Mountains or Sea?",
    question3:"Do you prefer Hot or Cold weather?",
  }

  constructor(private dataService:DataService, private router:Router) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const request=[{
      q:this.question.question1, ans:this.answer.answer1,
    },
    {
      q:this.question.question2, ans:this.answer.answer2,
    },
    {
      q:this.question.question3, ans:this.answer.answer3,
    }]
    this.dataService.GetTrips(request).subscribe(response => {
      if(response)
      this.router.navigate(["/final/"+response])
    });
    
  }
}
