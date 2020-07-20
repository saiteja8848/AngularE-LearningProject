import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any = {};
  private valid: boolean;

  constructor(
    private dataService: DataService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  login(loginData) {
    this.dialog.closeAll();
    if (this.dataService.validateCreditionals(this.loginData) == true) {
      this.router.navigate(['/home']);
    } else window.alert('Invalid Creditionals');
  }
}
