import { Component } from '@angular/core';
import { Hooper } from 'Hooper';
import { HooperService } from './hooper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private hooperService: HooperService) {}

  hoopers!: Hooper[];

  addHooper(hooper: Hooper) {
    this.hoopers.push(hooper);
  }

  ngOnInit() {
    this.hooperService.getAllHoopers().subscribe((hoopers) => {
      this.hoopers = hoopers;
    });
  }
}
