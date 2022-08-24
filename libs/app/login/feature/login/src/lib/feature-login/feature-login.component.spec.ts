import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureLoginComponent } from './feature-login.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HarnessLoader } from "@angular/cdk/testing";
import { TestbedHarnessEnvironment } from "@angular/cdk/testing/testbed";

describe('FeatureLoginComponent', () => {
  let component: FeatureLoginComponent;
  let fixture: ComponentFixture<FeatureLoginComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [FeatureLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureLoginComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
