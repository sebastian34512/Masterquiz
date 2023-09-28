import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/BL/data.service';
import { Question } from 'src/app/BL/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  public question: Question;

  constructor(public data: DataService, private navCtrl: NavController) {
    this.question = this.data.newQuestion();
  }

  ngOnInit() {
  }

}
