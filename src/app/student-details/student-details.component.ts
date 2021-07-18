import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentService } from '../services/student.service';

var newDate: Date = new Date();
const ELEMENT_DATA = [
  {
    id: 1,
    name: 'Ankit Gupta',
    emailid: 'iankitgupta9@gmail.com',
    gender: 'Male',
    date: newDate,
    city: 'Bengaluru',
    state: 'Karnataka',
  },
  {
    id: 2,
    name: 'Ansh Gupta',
    emailid: 'gua9838@gmail.com',
    gender: 'Female',
    date: newDate,
    city: 'Bengaluru',
    state: 'Karnataka',
  },
  {
    id: 3,
    name: 'Rakesh Roshan',
    emailid: 'gua9838@gmail.com',
    gender: 'Male',
    date: newDate,
    city: 'Bengaluru',
    state: 'Karnataka',
  },
  {
    id: 4,
    name: 'Nitin Shinde',
    emailid: 'gua9838@gmail.com',
    gender: 'Male',
    date: newDate,
    city: 'Bengaluru',
    state: 'Karnataka',
  },
  {
    id: 5,
    name: 'Kavita Rathod',
    emailid: 'gua9838@gmail.com',
    gender: 'Female',
    date: newDate,
    city: 'Bengaluru',
    state: 'Karnataka',
  },
];

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StudentDetailsComponent implements OnInit {
  count = 5;
  noOfMale = 0;
  noOfFemale = 0;

  constructor(
    public dialog: MatDialog,
    private StudentService: StudentService
  ) {}

  ngOnInit() {
    this.countValue();
  }

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'name',
    'emailid',
    'gender',
    'date',
    'address',
    'action',
  ];

  countValue() {
    this.noOfMale = 0;
    this.noOfFemale = 0;
    this.dataSource.filter((value: any) => {
      if (value.gender == 'Male') {
        this.noOfMale = this.noOfMale + 1;
      } else if (value.gender == 'Female') {
        this.noOfFemale = this.noOfFemale + 1;
      }
    });
    this.StudentService.maleCount(this.noOfMale);
    this.StudentService.femaleCount(this.noOfFemale);
    var totalCount = this.noOfMale + this.noOfFemale;
    this.StudentService.isCountUpdates(totalCount);
  }

  // To perform Curd Operations
  openDialog(action: any, selectedStudent: any) {
    selectedStudent.action = action;
    const dialogRef = this.dialog.open(StudentFormComponent, {
      data: selectedStudent,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addNewStudent(result.data);
      } else if (result.event == 'Update') {
        this.updateDetails(result.data);
      } else if (result.event == 'Delete') {
        this.deleteStudent(result.data);
      }
    });
  }

  // To Add new student
  addNewStudent(student: any) {
    this.dataSource.push({
      id: this.count++,
      name: student.name,
      emailid: student.emailid,
      gender: student.gender,
      date: student.date,
      city: student.city,
      state: student.state,
    });
    this.dataSource = [...this.dataSource];
    this.countValue();
  }

  // To Update student details
  updateDetails(student: any) {
    this.dataSource = this.dataSource.filter((value: any) => {
      if (value.id == student.id) {
        value.name = student.name;
        value.emailid = student.emailid;
        value.gender = student.gender;
        value.date = student.date;
        value.city = student.city;
        value.state = student.state;
      }
      return true;
    });
    this.countValue();
  }

  // To Delete student details
  deleteStudent(student: any) {
    this.dataSource = this.dataSource.filter((value: any) => {
      return value.id != student.id;
    });
    this.countValue();
  }
}
