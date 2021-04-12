import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  selectedYears: number = 0;
  search: string = '';
  departmentCount: any = [];
  usersListMaster: any = [{
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": "10/08/2016"
  },
  { "id": 12, "name": "John", "department": "HR", "joining_date": "01/18/2011" },
  { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "11/28/2019" },
  { "id": 14, "name": "Vish", "department": "Development", "joining_date": "7/7/2017" },
  { "id": 15, "name": "Barry", "department": "Operations", "joining_date": "08/19/2014" },
  { "id": 16, "name": "Ady", "department": "Finance", "joining_date": "10/05/2014" },
  { "id": 17, "name": "Gare", "department": "Development", "joining_date": "04/06/2014" },
  { "id": 18, "name": "Hola", "department": "Development", "joining_date": "12/08/2010" },
  { "id": 19, "name": "Ola", "department": "HR", "joining_date": "05/07/2011" },
  { "id": 20, "name": "Kim", "department": "Finance", "joining_date": "10/20/2010" }];


  usersData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.usersData = this.usersListMaster;
    this.getDepartmentCounts();
  }

   /* 
     Get List of users data who has morethan 2+ years of experience 
     List returns with 2+ years of experience candidates
 */

  changeSelector(ev) {
    this.usersData = this.usersListMaster.filter(e => this.getYearsOfExp(e.joining_date) > Number(this.selectedYears));
  }


  /* 
     Serach by name key 
     Userlist Array filters by name  
  */
  searchdataByName() {
    this.usersData = this.usersListMaster.filter(e => (e.name.toLowerCase().includes(this.search)));
  }

  /* 
    Get years of experience by comparing Current date and joining date  
    List returns with years of experience
  */
  getYearsOfExp(joining_date) {
    return Math.floor((new Date().getTime() - new Date(joining_date).getTime()) / (1000 * 3600 * 24 * 365));
  }

  /* 
   Get Each department candidates count from list of users 
   Returns array department count 
  */
  getDepartmentCounts() {
    this.usersListMaster.forEach(element => {
      if (this.departmentCount.findIndex(x => x.department === element.department) <= -1) {
        this.departmentCount.push({ 'department': element.department, 'count': this.usersListMaster.filter(e => e.department === element.department).length });
      }
    });
  }

  /* 
    Get Users list Other than category given   
    Array with eliminaion from category
  */
  getCandidatesOtherThanDevelopment(category): any {
    return this.usersListMaster.filter(e => e.department != category);
  }

}
