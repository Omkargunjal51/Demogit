import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass12Component } from './ass-12.component';

describe('Ass12Component', () => {
  let component: Ass12Component;
  let fixture: ComponentFixture<Ass12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ass12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ass12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
