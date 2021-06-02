import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_name:any;
  constructor( private service : LoginService,
    private route:Router,
    private toastr: ToastrService,
    ) { }


  ngOnInit(): void {
     this.user_name = localStorage.getItem('user_name');
  }

  logout(){
    localStorage.removeItem(environment.key);
    this.route.navigate(['/login']);
    this.toastr.success('Logout successfully.');
  }
}
