import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfinishedRunsComponent } from './unfinished-runs.component';

describe('UnfinishedRunsComponent', () => {
  let component: UnfinishedRunsComponent;
  let fixture: ComponentFixture<UnfinishedRunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfinishedRunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfinishedRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
