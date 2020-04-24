import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  @Input()
  isLogin: boolean;

  @Input()
  userEmail: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userEmail = '[user email]';
  }

  onLogOut(event) {
    event.preventDefault();
    this.authService.logout();
    window.location.reload();
  }
}
