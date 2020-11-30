import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubdetailPage } from './subdetail.page';

describe('SubdetailPage', () => {
  let component: SubdetailPage;
  let fixture: ComponentFixture<SubdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
