import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaMensajesComponent } from './caja-mensajes.component';

describe('CajaMensajesComponent', () => {
  let component: CajaMensajesComponent;
  let fixture: ComponentFixture<CajaMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
