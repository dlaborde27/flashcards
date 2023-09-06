import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { ReportComponent } from './pages/report/report.component';
import { FlashcardCreatorComponent } from './pages/flashcard-creator/flashcard-creator.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "about", component: AboutComponent },
  { path: "report", component: ReportComponent },
  { path: "createCard", component: FlashcardCreatorComponent },
  { path: " ", redirectTo: '/main', pathMatch: 'full' },
  { path: "**", redirectTo: "main" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }