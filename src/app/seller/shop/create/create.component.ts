import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  form = this.fb.group({
    name: ['', Validators.required],
    contact_number: ['', Validators.required],
    banner: ['', Validators.required],
    shop_category_id: ['', Validators.required],
    business_location: ['', Validators.required],
    tax_id: ['', Validators.required],
    image: ['']
  });
  matcher = new MyErrorStateMatcher();

  submit_form() {
    console.log("hello world")
  }

  file_upload(event: any) {
    if (event.target.files[0].type.split('/')[0] === "image") {
      this.form.controls.image.setErrors({'image': null})
      this.form.value.banner = event.target.files[0];
    } else {
      this.form.controls.image.setErrors({'image': "Please submit a image only."})
    }

  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
