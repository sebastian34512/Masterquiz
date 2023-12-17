import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionListPage } from './question-list.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

describe('QuestionListPage', () => {
  let component: QuestionListPage;
  let fixture: ComponentFixture<QuestionListPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionListPage],
      imports: [FormsModule, IonicModule], // Hinzugefügt
    });
    fixture = TestBed.createComponent(QuestionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
