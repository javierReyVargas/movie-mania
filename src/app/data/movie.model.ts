export interface IMovie {
  id: number;
  title: string;
  description: string;
  rating: number;
  duration: string;
  genre: Array<string>;
  released_date: Date;
  onWatchList: boolean;
  trailer: string;
  urlImage: string;
}
