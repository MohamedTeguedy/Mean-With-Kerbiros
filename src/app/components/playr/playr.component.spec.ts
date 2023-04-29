import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayrComponent } from './playr.component';

describe('PlayrComponent', () => {
  let component: PlayrComponent;
  let fixture: ComponentFixture<PlayrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
