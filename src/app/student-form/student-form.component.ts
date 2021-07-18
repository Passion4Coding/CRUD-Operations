import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  action: any;
  studentSelected: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.studentSelected = { ...data };
    this.action = this.studentSelected.action;
    this.studentForm = this.fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ]),
      ],
      email: [null, Validators.compose([Validators.required])],
      mobile: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {}

  curdOperations() {
    this.dialogRef.close({ event: this.action, data: this.studentSelected });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
