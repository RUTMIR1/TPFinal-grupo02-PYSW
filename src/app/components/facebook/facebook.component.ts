import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/providers/facebook';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facebook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './facebook.component.html',
  styleUrl: './facebook.component.css'
})
export class FacebookComponent implements OnInit {
  mensaje: string = "";
  constructor(private fb: FacebookService,private router: Router,private toastr: ToastrService,) {
    this.iniciarFb();
    let initParams: InitParams = {
      appId: '1031646758348262',
      xfbml: true,
      version: 'v3.2'
    };
    fb.init(initParams);
  }
  ngOnInit(): void {
  }
  postFb() {
    var apiMethod: ApiMethod = "post";
    this.fb.api('/385195447990917/feed', apiMethod,
      {
        "message": this.mensaje,
        "access_token": "EAAOqRvqQpeYBO3NJZCjqjYblkRTzRZC6ZB7XwUcFr72iIHdah6kePy2FSkhTyHztgZAZABeEf5OUWG8UPTDj1jOUcewZA7v3G7m5U2Ns8mNW1HTV4ZC3Y3TZAzXge1GbXq6xbWrFs2gX5SF7gSfPICqNS2B8J1VmR3KSGOVJlUIKO0lxE523vDuGpDGqiFZAod2MldNFFBseYEAxQzEFTBQZDZD"
  
      });
      this.toastr.success("publicacion agregada a facebook");
  }
  iniciarFb() {
    let initParams: InitParams = {
      appId: '1031646758348262',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v7.0'
    };
    this.fb.init(initParams);
  }
  redirigir(){
    this.router.navigate(['/home']);
  }
  loginWithFacebook(): void {
 
    this.fb.login()
    .then((response: LoginResponse) =>
    {
    console.log(response);
    
    })
    .catch((error: any) => console.error(error));
    }
}
 

