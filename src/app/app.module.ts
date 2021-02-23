import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterializeModule } from "angular2-materialize";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { FooterComponent } from "./footer/footer.component";
import { MovieSearchItemComponent } from "./movie-search-item/movie-search-item.component";
import { MovieService } from "./movie-service.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieCardComponent,
    FooterComponent,
    MovieSearchItemComponent
  ],
  imports: [BrowserModule, MaterializeModule, FormsModule, HttpClientModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
