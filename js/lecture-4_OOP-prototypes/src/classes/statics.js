class Article {
  static publisher = "O'Reilly";

  static createDefault() {
    return new Article("General News");
  }

  constructor(title) { this.title = title; }
}

console.log(Article.publisher); // O'Reilly