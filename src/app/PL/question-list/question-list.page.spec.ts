import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionListPage } from './question-list.page';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

describe('QuestionListPage', () => {
  let component: QuestionListPage;
  let fixture: ComponentFixture<QuestionListPage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NavController', ['navigateForward']);
    TestBed.configureTestingModule({
      declarations: [QuestionListPage],
      imports: [FormsModule, IonicModule], // Hinzugefügt
      providers: [
        {
          provide: NavController,
          useValue: spy,
        },
      ],
    });
    fixture = TestBed.createComponent(QuestionListPage);
    component = fixture.componentInstance;
    navCtrlSpy = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Sample unit test
  it('should navigate to question-detail page', () => {
    component.show('123');
    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith('/question/123');
  });
});
