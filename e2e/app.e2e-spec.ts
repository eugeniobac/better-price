import { BetterPricePage } from './app.po';

describe('better-price App', function() {
  let page: BetterPricePage;

  beforeEach(() => {
    page = new BetterPricePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
