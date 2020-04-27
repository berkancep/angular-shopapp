import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminListComponent } from './category-admin-list.component';

describe('CategoryAdminListComponent', () => {
  let component: CategoryAdminListComponent;
  let fixture: ComponentFixture<CategoryAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
