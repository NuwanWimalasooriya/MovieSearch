import { MovieService } from "./../movie-service.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Movie } from "../Movie";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  searchResults: Movie[] = [];
  search = "";
  search$: Subject<String> = new Subject<String>();
  fetching = false;
  showingMovie = false;
  @Input() currentMovie: Movie;
  @Output() startNewSearch = new EventEmitter();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.search$
      .debounceTime(500)
      .map(query => {
        this.fetching = true;
        return query;
      })
      .subscribe(this.searchQuery.bind(this));
  }

  searchQuery = (query: string) => {
    this.showingMovie = false;
    if (query.length > 0) {
      this.movieService.searchMovie(query).subscribe(results => {
        this.fetching = true;
        this.searchResults = results;
      });
    } else {
      this.fetching = false;
      this.searchResults = [];
    }
  };

  setCurrentMovie(movie: Movie) {
    this.movieService.changeSelectedMovie(movie);
    this.showingMovie = true;
  }
}
