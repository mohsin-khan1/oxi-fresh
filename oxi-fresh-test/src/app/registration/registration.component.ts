import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  registrationForm : FormGroup = this.formBuilder.group({

    name : [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password : [null, Validators.required],
    password_confirmation : [null, Validators.required],
  }, {validator: this.pwdConfirming('password', 'password_confirmation')});

  FormSubmitted: Boolean = false;
  constructor(private formBuilder : FormBuilder,
              private service : LoginService,
              private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
  }

  get registrationFormControls() {
    return this.registrationForm.controls;
  }

  onRegistation(){
    this.FormSubmitted = true;
    this.registrationForm.value;
    console.log(this.registrationForm)
      this.service.registration(this.registrationForm.value).subscribe(res => {
      if(res){
        this.toastr.success('Registered successfully.');
      }
    },err => {
      if(err){
        this.toastr.error('Registration Failed.');
      }
    }
      );
  
  }

  pwdConfirming(key: string, confirmationKey: string) {
    return (group: FormGroup) => {
        const input = group.controls[key];
        const confirmationInput = group.controls[confirmationKey];
        return confirmationInput.setErrors(
            input.value !== confirmationInput.value ? {notEquivalent: true} : null
        );
    };
}
  

}
