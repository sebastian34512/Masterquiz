import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionPage } from './question.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

describe('QuestionPage', () => {
  let component: QuestionPage;
  let fixture: ComponentFixture<QuestionPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionPage],
      imports: [FormsModule, IonicModule], // Hinzugefügt
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: new Map().set('id', 'your_id_value'),
            },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(QuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
