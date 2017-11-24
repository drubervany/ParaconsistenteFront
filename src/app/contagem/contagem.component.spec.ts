import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContagemComponent } from './contagem.component';

describe('ContagemComponent', () => {
  let component: ContagemComponent;
  let fixture: ComponentFixture<ContagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
