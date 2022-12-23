import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>you selected department with id= {{ departmentId }}</h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
      <button (click)="goPrevious()">Previous</button><br /><br />
      <button (click)="goNext()">Next</button>
      <button (click)="goToDepartments()">Back</button>
    </p>
  `,
  styleUrls: ['./department-detail.component.css'],
})
export class DepartmentDetailComponent implements OnInit {
  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments',{ id: selectedId, test:testValue' },
    //]);
    //relative navigation
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    //let id = this.route.snapshot.paramMap.get('id');//snapshot method
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.departmentId = id;
    });
  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments', nextId]);
  }
  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
