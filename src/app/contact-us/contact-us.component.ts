import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  form: FormGroup;
  formMessage: string = '';
  alertDuration: number = 7000;

  private alertBox = inject(MatSnackBar);

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: [],
      mobile: [],
      email: [],
      message: []
    });
  }

  onSubmit(event: any) {
    event.preventDefault();

    const name = this.form.get('name')?.value;
    const mobile = this.form.get('mobile')?.value;

    if (name == null || mobile == null || name === '' || mobile === '') {
      this.showAlert('Please fill out all the fields.');
    } else if (this.isValidPhoneNumber(mobile) == false) {
      this.showAlert("Please enter a valid 10 digit mobile number.");
    } else {
      this.formMessage = 'Thank you for contacting us, ' + name + '. We will get back to you soon!';
      this.form.reset();
    }
  }

  showAlert(msg: string) {
    this.alertBox.open(msg, "OK", {
      duration: this.alertDuration,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  isValidPhoneNumber(inputtxt: any) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    }
    else {
      return false;
    }
  }
}
