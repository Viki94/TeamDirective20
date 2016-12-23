import { TeamDirective20Page } from './app.po';

describe('team-directive-20 App', function() {
  let page: TeamDirective20Page;

  beforeEach(() => {
    page = new TeamDirective20Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
