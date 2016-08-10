export class Angular2CRMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Ang2CRM-root h1')).getText();
  }
}
