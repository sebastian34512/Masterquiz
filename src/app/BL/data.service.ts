import { Injectable } from '@angular/core';
import { Quiz } from './quiz';
import { v4 as uuidv4 } from 'uuid';
import { Question } from './question';


//injectable objekte können nicht mit new erstellt werden, 
//sondern werden in einen anderen Konstruktor injected, und dann geschieht eine von zwei Sachen: 
//entweder es gibt ein Objekt, dann wird das zurückgegeben, 
//oder es gibt keins dann wird eins erstellt. (Singleton Pattern)
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentQuiz: Quiz = {
    id: '1',
    title: 'neu',
    questions: []
  };
  constructor() {
    this.currentQuiz.questions.push(
      {
        id: '1',
        title: 'Wie viele Beine hat ein Hund?',
        a1: '1',
        a2: '2',
        a3: '3',
        a4: '4',
        correct: 4,
      },
      {
        id: '2',
        title: 'Wie viele Beine hat ein Vogel?',
        a1: '1',
        a2: '2',
        a3: '3',
        a4: '4',
        correct: 2,
      },
    );
  }
  public newQuestion(): Question {
    return {
      id: "",
      title: "",
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      correct: 0,
    }
  }

  public getQuestion(id: string): Question {
    return this.currentQuiz.questions.find(q => q.id == id) ?? this.newQuestion();
  }

  public addQuestion(question: Question) {
    question.id = uuidv4();
    this.currentQuiz.questions.push(question);
  }

  public deleteQuestion(id: string) {
    this.currentQuiz.questions = this.currentQuiz.questions.filter(q => q.id != id);
  }
}
