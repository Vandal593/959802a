import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirLineasComponent } from './unir-lineas.component';

describe('UnirLineasComponent', () => {
  let component: UnirLineasComponent;
  let fixture: ComponentFixture<UnirLineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnirLineasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnirLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
