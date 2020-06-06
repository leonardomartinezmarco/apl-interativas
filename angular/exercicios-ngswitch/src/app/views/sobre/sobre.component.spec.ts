import { async, ComponentFixture, TestBed } from 'src/app/views/ex1/node_modules/@angular/core/testing';

import { SobreComponent } from './sobre.component';

describe('SobreComponent', () => {
  let component: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
