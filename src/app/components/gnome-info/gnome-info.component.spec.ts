import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeInfoComponent } from './gnome-info.component';

describe('GnomeInfoComponent', () => {
  let component: GnomeInfoComponent;
  let fixture: ComponentFixture<GnomeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GnomeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
