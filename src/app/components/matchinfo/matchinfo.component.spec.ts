import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchinfoComponent } from './matchinfo.component';

describe('MatchinfoComponent', () => {
  let component: MatchinfoComponent;
  let fixture: ComponentFixture<MatchinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
