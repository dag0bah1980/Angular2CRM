import { Angular2CRMPage } from './app.po';

describe('angular2-crm App', function() {
  let page: Angular2CRMPage;

  beforeEach(() => {
    page = new Angular2CRMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ang2CRM works!');
  });
});
