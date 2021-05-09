import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmMyAccountComponent } from './tm-my-account.component';

describe('TmMyAccountComponent', () => {
  let component: TmMyAccountComponent;
  let fixture: ComponentFixture<TmMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmMyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
