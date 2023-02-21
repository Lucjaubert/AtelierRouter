import { Component } from '@angular/core';
import { Developer } from './models/developer.model';
import { Skill } from './models/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  developer: Developer;

  constructor() {
    this.developer = new Developer(
      'Jaubert',
      'Luc',
      39,
      'Homme',
      'Je suis un développeur passionné qui aime résoudre des problèmes et créer des applications innovantes.',
      [
        new Skill(
          'Angular',
          'https://angular.io/assets/images/logos/angular/angular.svg',
          'https://angular.io/'
        ),
        new Skill(
          'React',
          'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
          'https://reactjs.org/'
        )
      ]
    );
  }
}
