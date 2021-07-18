import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css'],
})
export class StudentCountComponent implements OnInit {
  total: any;
  usersCount = [
    { heading: 'Male User', count: 0 },
    { heading: 'Female User', count: 0 },
  ];

  constructor(private StudentService: StudentService) {}

  ngOnInit(): void {
    this.updateUserCount();
  }

  updateUserCount() {
    this.usersCount[0].count = 0;
    this.usersCount[1].count = 0;
    this.StudentService.maleUpadte.subscribe(
      (newCount) => (this.usersCount[0].count = newCount)
    );
    this.StudentService.femaleUpadte.subscribe(
      (newCount) => (this.usersCount[1].count = newCount)
    );
    this.StudentService.countUpdated.subscribe(
      (newCount) => (this.total = `${newCount}${0}`)
    );
  }
}
