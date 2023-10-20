import { TestBed } from '@angular/core/testing';
import { FirstApp } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [FirstApp],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FirstApp);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'first-my-app'`, () => {
    const fixture = TestBed.createComponent(FirstApp);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('first-my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FirstApp);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'first-my-app app is running!'
    );
  });
});
