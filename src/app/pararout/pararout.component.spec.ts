import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PararoutComponent } from './pararout.component';

describe('PararoutComponent', () => {
  let component: PararoutComponent;
  let fixture: ComponentFixture<PararoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PararoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PararoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
