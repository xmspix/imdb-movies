import { makeAutoObservable } from "mobx";
import { isMobile } from "./utils/functions";

class Store {
  menu: boolean = !isMobile() ? true : false;
  movies: any[] = [];
  collection: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMovies(movies: any){
    this.movies = movies;
  }

  addToCollection(movie: any) {
    this.collection.push(movie);
  }

  removeFromCollection(id: string) {
    this.collection = this.collection.filter((movie: any) => movie.id !== id);
  }

  toggleMenu() {
    this.menu ? (this.menu = false) : (this.menu = true);
  }
}

export default new Store();