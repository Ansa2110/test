import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomiconComponent } from './randomicon.component';

describe('RandomiconComponent', () => {
  let component: RandomiconComponent;
  let fixture: ComponentFixture<RandomiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomiconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
