import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardListComponent } from './hero-card-list.component';

describe('HeroCardListComponent', () => {
  let component: HeroCardListComponent;
  let fixture: ComponentFixture<HeroCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
