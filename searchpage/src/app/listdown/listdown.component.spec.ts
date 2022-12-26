import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdownComponent } from './listdown.component';

describe('ListdownComponent', () => {
  let component: ListdownComponent;
  let fixture: ComponentFixture<ListdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
