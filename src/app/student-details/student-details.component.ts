import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';

var ate: Date = new Date();
const ELEMENT_DATA = [
  {
    id: 1,
    name: 'Ankit Gupta',
    emailid: 'qw4151@gmail.com',
    contact: '9129829901',
    gender: 'Male',
    date: ate,
    qualification: 'HTML5, CSS3, Angular, Angular Material',
    city: 'Bengaluru',
    state: 'Karnataka ',
  },
  {
    id: 2,
    name: 'Ansh Gupta',
    emailid: 'gua9838@gmail.com',
    contact: '9129829901',
    gender: 'Male',
    date: ate,
    qualification: 'HTML5, CSS3, Angular, Angular Material',
    city: 'Bengaluru',
    state: 'Karnataka ',
  },
];

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StudentDetailsComponent implements OnInit {
  count = 3;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'id',
    'name',
    'gender',
    'emailid',
    'qualification',
    'date',
    'contact',
    'city',
    'state',
    'action',
  ];

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
      contact: student.contact,
      gender: student.gender,
      date: student.date,
      qualification: student.qualification,
      city: student.city,
      state: student.state,
    });
    this.dataSource = [...this.dataSource];
  }

  // To Update student details
  updateDetails(student: any) {
    this.dataSource = this.dataSource.filter((value: any) => {
      if (value.id == student.id) {
        value.name = student.name;
        value.emailid = student.emailid;
        value.contact = student.contact;
        value.gender = student.gender;
        value.date = student.date;
        value.qualification = student.qualification;
        value.city = student.city;
        value.state = student.state;
      }
      return true;
    });
  }

  // To Delete student details
  deleteStudent(student: any) {
    this.dataSource = this.dataSource.filter((value: any) => {
      return value.id != student.id;
    });
  }
}
