import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEMpleadoComponent } from './listar-empleado.component';

describe('ListarEMpleadoComponent', () => {
  let component: ListarEMpleadoComponent;
  let fixture: ComponentFixture<ListarEMpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEMpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEMpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
