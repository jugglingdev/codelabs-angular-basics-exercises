import { Component } from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
  title: string = 'What a Wonderful Day';
  content: string =
    'I see trees of green, Red roses too, I see them bloom, For me and you.  And I think to myself What a wonderful world.';
  isTechRelated: boolean = false;

  getBackgroundColor() {
    return this.isTechRelated == true ? 'blue' : 'yellow';
  }

  getColor() {
    return this.isTechRelated == true ? 'white' : 'black';
  }

  toggleIsTechRelated(): void {
    if (this.isTechRelated) {
      this.isTechRelated = false;
    } else {
      this.isTechRelated = true;
    }
  }
}
