import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagementComponent } from './category-management.component';

describe('CateogoryManagementComponent', () => {
  let component: CategoryManagementComponent;
  let fixture: ComponentFixture<CategoryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
