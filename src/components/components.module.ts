import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { Header } from "./header/header.component";
import { Main } from "./main/main.component";
import { Footer } from "./footer/footer.component";

import { ReasonItem } from "./main/reason/reason.component";
import { ArticleItem } from "./main/article/article.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Header,
    Main,
    Footer,
    ReasonItem,
    ArticleItem
  ],
  exports: [
    Header,
    Main,
    Footer,
    ReasonItem,
    ArticleItem
  ]
})

export class ComponentModules {}
