import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { BooksPage } from "./books.page";
import { BookComponent } from "../book/book.component";

const routes: Routes = [
  {
    path: "",
    component: BooksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BooksPage, BookComponent]
})
export class BooksPageModule {}
