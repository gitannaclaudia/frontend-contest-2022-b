import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFeatureEditComponent } from './users-feature-edit.component';

describe('UsersFeatureEditComponent', () => {
  let component: UsersFeatureEditComponent;
  let fixture: ComponentFixture<UsersFeatureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersFeatureEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersFeatureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
