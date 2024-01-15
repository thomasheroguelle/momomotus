import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedserviceService } from '../../service/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  name: string = '';

  constructor(private shared: SharedserviceService, private router: Router) { }

  onSubmit() {
    this.shared.setName(this.name);
    console.log(this.shared.getName());
    this.router.navigate(['main'])
  }
}