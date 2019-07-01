import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  // prettier-ignore
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  // prettier-ignore
  { path: 'books', loadChildren: './books/books.module#BooksPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
