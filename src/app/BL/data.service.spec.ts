import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Question } from './question';
import { Quiz } from './quiz';
import { Preferences } from '@capacitor/preferences';

describe('DataService', () => {
  let service: DataService;
  const question: Question = {
    id: '3',
    title: 'Wie gut können wir testen',
    a1: 'nicht gut',
    a2: 'so lala',
    a3: 'ganz ok',
    a4: 'super gut',
    correct: 4,
  };

  const quiz: Quiz = {
    id: '1',
    title: 'neu',
    questions: [question],
  };

  beforeEach(() => {
    //service = new DataService();
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
    service.currentQuiz.questions = [];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //unit test
  it('should add a question to currentQuiz', () => {
    service.addQuestion(question);

    const addedQuestion = service.currentQuiz.questions.find(
      (q) => q.id == question.id
    );

    expect(addedQuestion).toBeDefined();
    expect(addedQuestion?.title).toBe('Wie gut können wir testen');
  });

  //integration test to show spy
  it('should call safeQuestion when calling deleteQuestion', () => {
    service.addQuestion(question);
    const spy = spyOn(service, 'safeQuestion');

    service.deleteQuestion(question);

    expect(spy).toHaveBeenCalled();

    expect(service.currentQuiz.questions.length).toBe(0);
  });
});
