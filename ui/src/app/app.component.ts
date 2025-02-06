import { Component, Injectable  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SendSendstrPost$Params } from './api/fn/operations/send-sendstr-post';
import { ApiService } from './api/services';
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent {
  title = 'ui';
  userInput: string = '';

  // TODO: Don't assume port 8000 
  constructor(private apiService: ApiService) {apiService.rootUrl = "http://127.0.0.1:8000"};

  sendMessage(){
    const param: SendSendstrPost$Params = {message:this.userInput}
    this.apiService.sendSendstrPost(param).subscribe(data => console.log(data))
  }

  submitInput() {
    console.log('User input submitted:', this.userInput);
  }
}
