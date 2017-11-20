import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadaDecisaoComponent } from './tomada-decisao.component';

describe('TomadaDecicaoComponent', () => {
  let component: TomadaDecisaoComponent;
  let fixture: ComponentFixture<TomadaDecisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadaDecisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomadaDecisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
