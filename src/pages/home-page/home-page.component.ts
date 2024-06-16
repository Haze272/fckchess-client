import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardModule,
    Button,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

}
