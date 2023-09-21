import { Injectable } from '@angular/core';
import { Quiz } from './quiz';


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
    this.currentQuiz.questions.push({
      id: '1',
      title: 'Wie viele Beine hat ein Hund?',
      a1: '1',
      a2: '2',
      a3: '3',
      a4: '4',
      correct: 4,
    });
  }
}
