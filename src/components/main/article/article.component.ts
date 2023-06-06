import { Component, Input } from '@angular/core';

@Component({
  selector: 'article-item',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})

export class ArticleItem {
  @Input('articleImg') articleImg?: string;

  @Input('articleAuthor') articleAuthor?: string;

  @Input('articleTitle') articleTitle?: string;

  @Input('articleContent') articleContent?: string;
}
