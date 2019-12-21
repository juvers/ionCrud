import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.page.html',
  styleUrls: ['./student-edit.page.scss'],
})
export class StudentEditPage implements OnInit {

  id: number;
  data: Student;

  constructor(public activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router) {
    this.data = new Student();
   }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params["id"];
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      // console.log(response);
      this.router.navigate(['list']);
    })
  }
 

}
