import { LibraryCatalogPage } from './app.po';

describe('library-catalog App', function() {
  let page: LibraryCatalogPage;

  beforeEach(() => {
    page = new LibraryCatalogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
