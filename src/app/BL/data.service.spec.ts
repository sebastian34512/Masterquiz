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
    quiz.questions = [question];
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

  //integration test
  it('should safe and load an added question', () => {
    service.addQuestion(question);

    service.safeQuestion();

    service.loadQuestion();

    expect(service.currentQuiz).toEqual(quiz);
  });

  //unit test to show spy
  it('should call safeQuestion when calling deleteQuestion', () => {
    const spy = spyOn(service, 'safeQuestion');

    service.deleteQuestion(question);

    expect(spy).toHaveBeenCalled();
  });
});
