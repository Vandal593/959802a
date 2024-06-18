import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarCodigoComponent } from './completar-codigo.component';

describe('CompletarCodigoComponent', () => {
  let component: CompletarCodigoComponent;
  let fixture: ComponentFixture<CompletarCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletarCodigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletarCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
