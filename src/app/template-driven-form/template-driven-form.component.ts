import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  fform: FormGroup;
  feedback: Feedback;
  submitted = null;
  showForm = true;

  formErrors = {
    'name': '',
    'message': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long.',
      'maxlength': 'Name cannot be more than 25 characters long.'
    },
    'message': {
      'required': 'Comment is required.',
      'minlength': 'Comment must be at least 2 characters long.',
      'maxlength': 'Comment cannot be more than 100 characters long.'
    }
  };

  constructor() {
  }

  ngOnInit() {
    this.feedback = {
      name: '',
      rating: 5,
      message: ''
    };
  }

  onSubmit(fform) {
    this.showForm = false;
    // TODO: feedback Service
    this.submitted = this.feedback;
    this.feedback = {
      name: '',
      rating: 5,
      message: ''
    };
    setTimeout(() => { this.submitted = null; this.showForm = true; }, 5000);
    fform.reset(
      {
        name: '',
        rating: 5,
        message: ''
      }
    );

  }

}
