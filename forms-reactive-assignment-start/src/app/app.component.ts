import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  status = ['Stable', 'Critical', 'Finished'];
  testForm: FormGroup;
  forbiddenName: 'test';

  ngOnInit() {
    this.testForm = new FormGroup({
      'name': new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
    })
  }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test') {
            resolve({ 'nameIsForbidden': true });
          } else {
            resolve(null)
          }
        }, 1500);
      });
    return promise;
  }

  onSubmit() {
    console.log(this.testForm.value)
  }
}
