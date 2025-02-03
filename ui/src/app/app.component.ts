import { Component, Injectable  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent {
  title = 'ui';
  userInput: string = '';

  private apiUrl = 'http://127.0.0.1:8000/sendstr?message=' ;  // Replace with your API URL

  constructor(private http: HttpClient) {};

  sendMessage(){
    let url:string  = this.apiUrl + this.userInput
    this.http.post(url, null).subscribe(data => {console.log(data)});
  }

  submitInput() {
    console.log('User input submitted:', this.userInput);
  }
}
