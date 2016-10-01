import { Angular2CRMProjectPage } from './app.po';

describe('angular2-crmproject App', function() {
  let page: Angular2CRMProjectPage;

  beforeEach(() => {
    page = new Angular2CRMProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
