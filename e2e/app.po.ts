export class EmptyStackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('empty-stack-app h1')).getText();
  }
}
