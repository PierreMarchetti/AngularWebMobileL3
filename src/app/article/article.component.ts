import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../list-articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles = ARTICLES;

  article: Article = {
    id: 1,
    title: 'Article fascinant',
    image: 'Default',
    description: 'Ceci est un article fascinant',
    category: 'Vie étudiante',
    date: '5/12/2018'
  };

  constructor() { }

  ngOnInit() {
  }

  selectedArticle: Article;
  onSelect(article: Article): void {
  this.selectedArticle = article;
}

}
