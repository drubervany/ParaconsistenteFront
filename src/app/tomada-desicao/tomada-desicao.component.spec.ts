import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadaDesicaoComponent } from './tomada-desicao.component';

describe('TomadaDecicaoComponent', () => {
  let component: TomadaDesicaoComponent;
  let fixture: ComponentFixture<TomadaDesicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadaDesicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomadaDesicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
