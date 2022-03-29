import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hooper } from 'Hooper';
import { HooperService } from '../hooper.service';

@Component({
  selector: 'app-add-new-hooper',
  templateUrl: './add-new-hooper.component.html',
  styleUrls: ['./add-new-hooper.component.css'],
})
export class AddNewHooperComponent implements OnInit {
  constructor(private hooperService: HooperService) {}

  @Output() newHooperEvent = new EventEmitter<Hooper>();

  firstName!: string;
  lastName!: string;
  jerseyNum!: number;
  salary!: number;

  addPlayer(firstName: string, lastName: string, jerseyNum: any, salary: any) {
    this.hooperService
      .addHooper(firstName, lastName, jerseyNum, salary)
      .subscribe((hooper) => {
        //this.newHooperEvent.emit(hooper);
        console.log('added hooper: ' + hooper.firstName);
      });
  }

  ngOnInit(): void {}
}
