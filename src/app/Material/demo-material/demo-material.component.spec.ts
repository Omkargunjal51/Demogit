import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMaterialComponent } from './demo-material.component';

describe('DemoMaterialComponent', () => {
  let component: DemoMaterialComponent;
  let fixture: ComponentFixture<DemoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
