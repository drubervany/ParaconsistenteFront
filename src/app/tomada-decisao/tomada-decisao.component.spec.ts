import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tomadaDecisaoComponent } from './tomada-decisao.component';

describe('TomadaDecicaoComponent', () => {
  let component: tomadaDecisaoComponent;
  let fixture: ComponentFixture<tomadaDecisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tomadaDecisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tomadaDecisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
