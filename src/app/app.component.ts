import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'company-crm';
  isLogin = false;
  userEmail: string;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getAuth().subscribe( auth => {
    if (auth) {
      this.isLogin = true;
      this.userEmail = auth.email;
    }
    });
  }
}
