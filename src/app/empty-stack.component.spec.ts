import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EmptyStackAppComponent } from '../app/empty-stack.component';

beforeEachProviders(() => [EmptyStackAppComponent]);

describe('App: EmptyStack', () => {
  it('should create the app',
      inject([EmptyStackAppComponent], (app: EmptyStackAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'empty-stack works!\'',
      inject([EmptyStackAppComponent], (app: EmptyStackAppComponent) => {
    expect(app.title).toEqual('empty-stack works!');
  }));
});
