import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFeatureListComponent } from './users-feature-list.component';

describe('UsersFeatureListComponent', () => {
  let component: UsersFeatureListComponent;
  let fixture: ComponentFixture<UsersFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
