import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrastrarPalabrasComponent } from './arrastrar-palabras.component';

describe('ArrastrarPalabrasComponent', () => {
  let component: ArrastrarPalabrasComponent;
  let fixture: ComponentFixture<ArrastrarPalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrastrarPalabrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrastrarPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
