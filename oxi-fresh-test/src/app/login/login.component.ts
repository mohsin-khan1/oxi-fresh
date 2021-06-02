import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import Login from '../Interface/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginForm : FormGroup = this.formBuilder.group({

    email : [null, [Validators.required, Validators.email]],
    password : [null, Validators.required]
});

uname:string;
returnUrl: string ='';
FormSubmitted: Boolean = false;
  constructor(
    private formBuilder : FormBuilder,
    private service : LoginService,
    private route:Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  onLogin(){
    this.FormSubmitted = true;
    console.log(this.loginForm.value)
    this.service.login(this.loginForm.value).subscribe(res => {
     if(res.access_token != '' || res.access_token != undefined ){
      this.service.Set(res.access_token);
      this.service.Set(res.user.id, 'user_id');
      this.service.Set(res.user.email, 'user_email');
      this.service.Set(res.user.name, 'user_name');
      this.toastr.success('Login successfully.');
      // if(this.returnUrl !=''){
      //   alert('hello');
      //   this.route.navigateByUrl(this.returnUrl);
        
      // }
      // this.route.navigate(['/main/subscribe']);
      this.route.navigateByUrl(this.returnUrl);


      
     }
    });
   
  }

}
