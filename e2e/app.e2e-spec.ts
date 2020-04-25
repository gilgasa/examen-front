import { FrontExamenPage } from './app.po';

describe('front-examen App', function() {
  let page: FrontExamenPage;

  beforeEach(() => {
    page = new FrontExamenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
