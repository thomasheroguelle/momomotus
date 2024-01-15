import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerdialogComponent } from './winnerdialog.component';

describe('WinnerdialogComponent', () => {
  let component: WinnerdialogComponent;
  let fixture: ComponentFixture<WinnerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinnerdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinnerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
