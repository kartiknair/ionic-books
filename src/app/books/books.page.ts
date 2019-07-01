import { Component, OnInit } from "@angular/core";

import { BooksService } from "../services/books.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.page.html",
  styleUrls: ["./books.page.scss"]
})
export class BooksPage implements OnInit {
  books: [];

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books.results.books;
    });
  }
}
