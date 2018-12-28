import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // operation: string = 'login';
  // email : string = null;
  // password : string = null;
  // constructor(private authenticationService: AuthenticationService) { }

  // login() {
  //   this.authenticationService.loginWithEmail(this.email, this.password).then((data)=>{
  //     alert('loggeado Correctamente')
  //     console.log(data)
  //   }).catch((error)=>{
  //     alert('ocurrio un error')
  //     console.log(error)
  //   })
  // }
  // ngOnInit() {
  // }

}
