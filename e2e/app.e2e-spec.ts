import { ValidationsPage } from './app.po';

describe('validations App', function() {
  let page: ValidationsPage;

  beforeEach(() => {
    page = new ValidationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
