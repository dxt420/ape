import { ShellModel } from '../../shell/data-store';

export class WikiDetailsModel extends ShellModel {
  title: string;
  picture: string;

  description: string;
 
  otherPics: Array<{name: string, icon: string}> = [
    {
      name: '',
      icon: ''
    },
    {
      name: '',
      icon: ''
    },
    {
      name: '',
      icon: ''
    },
  ];

  constructor() {
    super();
  }
}
