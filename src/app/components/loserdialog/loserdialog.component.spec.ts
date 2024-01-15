import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoserdialogComponent } from './loserdialog.component';

describe('LoserdialogComponent', () => {
  let component: LoserdialogComponent;
  let fixture: ComponentFixture<LoserdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoserdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoserdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
