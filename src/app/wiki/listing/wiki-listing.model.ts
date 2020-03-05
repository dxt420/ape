import { ShellModel } from '../../shell/data-store';

export class WikiItemModel {
  slug: string;
  picture: string;
  description: string;
}

export class WikiListingModel extends ShellModel {
  items: Array<WikiItemModel> = [
    new WikiItemModel(),
    new WikiItemModel(),
    new WikiItemModel(),
    new WikiItemModel()
  ];

  constructor() {
    super();
  }
}
