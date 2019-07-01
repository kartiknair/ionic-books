import { Component, OnInit, Input } from "@angular/core";

import { BooksService } from "../services/books.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  @Input() book;

  constructor(private bookService: BooksService) {}

  ngOnInit() {}

  openModal(book) {
    this.bookService.showModal(book);
  }
}
