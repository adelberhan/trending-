import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})

export class RegesterComponent implements OnInit {
  messageError: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  registerForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, Validators.min(17), Validators.max(80)]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-zA-Z0-9]{3,16}$')]),
  })


  ngOnInit(): void {
  }
  registerFormSubmit(registerForm: FormGroup) {
    console.log(registerForm.value);

    this._AuthService.postRegieterForm(registerForm.value).subscribe((data) => {
      console.log(data);

      if (data.message == 'success') {
        this._Router.navigate(['/login'],)
      }
      else {
        this.messageError = data.errors.email.message;
      }
    })
  }
}
