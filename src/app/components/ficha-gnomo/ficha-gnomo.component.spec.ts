import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaGnomoComponent } from './ficha-gnomo.component';

describe('FichaGnomoComponent', () => {
  let component: FichaGnomoComponent;
  let fixture: ComponentFixture<FichaGnomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaGnomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaGnomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
