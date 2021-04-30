import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLibraryComponent } from './manager-library.component';

describe('ManagerLibraryComponent', () => {
  let component: ManagerLibraryComponent;
  let fixture: ComponentFixture<ManagerLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
