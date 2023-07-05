import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MispeliculasComponent } from './mispeliculas.component';

describe('MispeliculasComponent', () => {
  let component: MispeliculasComponent;
  let fixture: ComponentFixture<MispeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MispeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MispeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
