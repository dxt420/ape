import { ShellModel } from '../../shell/data-store';

export class PlacesItemModel {
  image: string;
  icon: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  address: string;
  rating: number;
  reviewsCount: number;
}

export class PlacesListingModel extends ShellModel {
  items: Array<PlacesItemModel> = [
    new PlacesItemModel(),
    new PlacesItemModel(),
    new PlacesItemModel(),
    new PlacesItemModel()
  ];

  constructor() {
    super();
  }
}
