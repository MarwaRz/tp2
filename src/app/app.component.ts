import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarteVisiteComponent } from "./carte-visite/carte-visite.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CarteVisiteComponent]
})
export class AppComponent {
  title = 'tp2_angular';
}
