import { Component } from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
  title: string = 'What a Codefied World';
  content: string =`
    (Verse 1)
    I see codebases so vast and wide,
    Bugs to squash and functions to confide,
    And I think to myself, what a codefied world.

    (Verse 2)
    The pull requests, they come and they go,
    Through Git and GitHub, and make the code grow,
    And I think to myself, what a codefied world.

    (Chorus)
    The colors of syntax so vivid and bright,
    Bring all my ideas to life in the night,
    I see friends coding apps, saying 'How do you do?',
    They're really saying 'I broke it, too'.

    (Verse 3)
    Libraries, frameworks, tools we embrace,
    With every line of code, we find our place,
    And I think to myself, what a codefied world.

    (Outro)
    Yes, I think to myself, what a codefied world,
    Oh, yes, I think to myself, what a codefied world.
    `;

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
