import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSaboresComponent } from './lista-sabores.component';

describe('ListaSaboresComponent', () => {
  let component: ListaSaboresComponent;
  let fixture: ComponentFixture<ListaSaboresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSaboresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
