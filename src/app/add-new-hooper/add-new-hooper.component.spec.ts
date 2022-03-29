import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHooperComponent } from './add-new-hooper.component';

describe('AddNewHooperComponent', () => {
  let component: AddNewHooperComponent;
  let fixture: ComponentFixture<AddNewHooperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewHooperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHooperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
