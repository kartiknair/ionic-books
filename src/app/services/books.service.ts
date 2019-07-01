import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  category: string = "education";
  apiKey: string = "LaOYNAw9Qkzj6olvQnWW8Yd09H5IHUUK";
  url: string = `https://api.nytimes.com/svc/books/v3/lists/current/${
    this.category
  }.json?api-key=${this.apiKey}`;

  constructor(
    private http: HttpClient,
    public modalController: ModalController
  ) {}

  getBooks(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  async showModal(book) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }
}
