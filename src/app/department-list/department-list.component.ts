import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li
        (click)="onSelect(department)"
        [class.selected]="isSelected(department)"
        *ngFor="let department of departments"
      >
        {{ department.id }} {{ department.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'BootStrap' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'Python' },
  ];
  public selectedId: string | null | undefined;
  constructor(private router: Router, private route: ActivatedRoute) {}
  onSelect(department: any) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], { relativeTo: this.route });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.selectedId = id;
    });
  }
  isSelected(department: any) {
    return department.id === this.selectedId;
  }
}
