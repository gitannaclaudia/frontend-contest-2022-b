import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFeatureShellComponent } from './users-feature-shell.component';

describe('UsersFeatureShellComponent', () => {
  let component: UsersFeatureShellComponent;
  let fixture: ComponentFixture<UsersFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
