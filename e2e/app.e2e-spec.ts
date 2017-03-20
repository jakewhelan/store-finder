import { StoreFinderPage } from './app.po';

describe('store-finder App', () => {
  let page: StoreFinderPage;

  beforeEach(() => {
    page = new StoreFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
