import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsplayComponent } from './letsplay.component';

describe('LetsplayComponent', () => {
  let component: LetsplayComponent;
  let fixture: ComponentFixture<LetsplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetsplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetsplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
