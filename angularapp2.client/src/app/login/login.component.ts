import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // هنا يمكنك إضافة منطق التحقق من بيانات تسجيل الدخول
    console.log('البريد الإلكتروني:', this.email);
    console.log('كلمة المرور:', this.password);
  }
}
