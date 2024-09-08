import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSpinner = false;
  title = 'Fazzuper LLC Page';
  isAuthorized$! : Observable<boolean>;

  constructor(
    private notification: NotificationService,
    private router: Router
  ){}

  ngOnInit() {
  }

  onToggleSpinner() : void {
    this.showSpinner = !this.showSpinner;
  }

  onFilesChanged(urls: string | string[]) : void {
    console.log('urls', urls);
  }

  onSuccess() : void {
    this.notification.success("Procedure was succesful!");
  }

  onError() : void {
    this.notification.error("Errors were found during the process");
  }

  onSignOut() : void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
