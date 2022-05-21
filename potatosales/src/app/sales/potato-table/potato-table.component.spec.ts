import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoTableComponent } from './potato-table.component';

describe('PotatoTableComponent', () => {
  let component: PotatoTableComponent;
  let fixture: ComponentFixture<PotatoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotatoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
