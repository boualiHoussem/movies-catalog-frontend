import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieHolder} from "../../models/movie.holder";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() holder: MovieHolder;
  @Input() showActionButtons: boolean

  @Output() movie: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onReadMore(holder: MovieHolder) {
    holder.show = !holder.show;
  }

  emitMovie(movieId: number) {
    this.movie.emit(movieId);
  }
}
