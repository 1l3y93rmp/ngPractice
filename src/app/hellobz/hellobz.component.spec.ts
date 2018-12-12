import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellobzComponent } from './hellobz.component';

describe('HellobzComponent', () => {
  let component: HellobzComponent;
  let fixture: ComponentFixture<HellobzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellobzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellobzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
