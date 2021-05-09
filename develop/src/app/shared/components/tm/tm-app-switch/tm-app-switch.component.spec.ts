import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmAppSwitchComponent } from './tm-app-switch.component';

describe('TmAppSwitchComponent', () => {
  let component: TmAppSwitchComponent;
  let fixture: ComponentFixture<TmAppSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmAppSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmAppSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
