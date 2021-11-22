import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LikeWidgetModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should auto generate id during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('should NOT auto generate id during ngOnInit when (@Input id) is assigned', () => {
    const id = 'my-id';
    component.id = id;
    fixture.detectChanges();
    expect(component.id).toBe(id);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, done => {
    fixture.detectChanges();

    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });

    component.like();
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called via spy`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
