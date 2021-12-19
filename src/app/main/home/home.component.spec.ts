import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './home.component';
declare var $: any;

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        ToastrModule.forRoot({
          timeOut: 1000,
          positionClass: 'toast-top-center',
        }),
      ],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('To check enable buying', () => {
    expect(component).toBeTruthy();
    expect(component.isbuy).toBe(true);
    expect(component.enablebuying());
    expect(component.isbuy).toBe(false)
  });
  it('First h2 is name with We are Delicio', () => {
  const element:HTMLElement = fixture.nativeElement;
  const header = element.querySelector('h2');
  expect(header?.textContent).toBe('We are Delicio')
  });
});
