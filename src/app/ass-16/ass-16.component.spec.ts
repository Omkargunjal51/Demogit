import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass16Component } from './ass-16.component';

describe('Ass16Component', () => {
  let component: Ass16Component;
  let fixture: ComponentFixture<Ass16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ass16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ass16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
