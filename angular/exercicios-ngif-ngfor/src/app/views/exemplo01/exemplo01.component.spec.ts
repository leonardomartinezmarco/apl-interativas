import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo01Component } from './exemplo01.component';

describe('Exemplo01Component', () => {
  let component: Exemplo01Component;
  let fixture: ComponentFixture<Exemplo01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
