import { Component } from '@angular/core';
import { UserService } from '@mkz-colors/user';
import { Observable } from 'rxjs';
@Component({
  selector: 'mkz-colors-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'red';
  public user$: Observable<any>;
  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
  }
}
