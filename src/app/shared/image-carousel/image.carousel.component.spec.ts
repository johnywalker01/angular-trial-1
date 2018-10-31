import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image.CarouselComponent } from './image.carousel.component';

describe('Image.CarouselComponent', () => {
  let component: Image.CarouselComponent;
  let fixture: ComponentFixture<Image.CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image.CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image.CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
