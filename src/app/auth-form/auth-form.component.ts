import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginData, RegisterData } from '../models/auth.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  imports: [
    FormsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    CommonModule,
  ],
})
export class AuthFormComponent {
  @Output() loginSuccess = new EventEmitter<void>();

  isloggedIn: boolean = false;

  activeTab: string = 'login';

  loginData: LoginData = {
    email: '',
    password: '',
  };

  registerData: RegisterData = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  onLogin() {
    console.log('logiiiin:', this.loginData);
    alert('Bejelentkezve! ( ez csak egy példa )');
    this.loginSuccess.emit();
    this.isloggedIn = true;
  }

  onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('A jelszavak nem egyeznek meg!');
      return;
    }
    console.log('regisztraci:', this.registerData);
    alert('Regisztrálva! ( ez csak egy példa )');
    this.loginSuccess.emit();
    this.isloggedIn = true;
  }
}
