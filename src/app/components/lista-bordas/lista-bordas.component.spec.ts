import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBordasComponent } from './lista-bordas.component';

describe('ListaBordasComponent', () => {
  let component: ListaBordasComponent;
  let fixture: ComponentFixture<ListaBordasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBordasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBordasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
