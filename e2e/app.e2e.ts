import { EmptyStackPage } from './app.po';

describe('empty-stack App', function() {
  let page: EmptyStackPage;

  beforeEach(() => {
    page = new EmptyStackPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('empty-stack works!');
  });
});
