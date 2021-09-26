import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.css'],
})
export class FormBoxComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  comps: Array<String> = [];
  choices = [];
  selectedChoices = [];
  constructor() {}

  public getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an ID';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onChange(f : any) {
    this.selectedChoices = f.selectedOptions.selected.map((item: { value: any; }) => item.value);

  }

  ngOnInit(): void {
    this.comps = ['Comics', 'Facts', 'Jokes', 'Trivia', 'Insults'];
  }

  onClick() : void {

  }
}
