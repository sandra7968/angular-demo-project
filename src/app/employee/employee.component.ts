import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empName:string = "Max Miller"
  empImgUrl:string = "https://cdn-icons-png.flaticon.com/512/219/219969.png"
  empDesg:string = ""
  empSalary:string = ""

  userAdd = ()=>{
    alert("Add Button Clicked!")
  }
  getEmpName(ename:any){
    this.empName = ename.target.value
  }
  userSubmit(userDetails:any){
    if(userDetails.value){
      alert(`${userDetails.value} added.`)
    }
    else{
      alert('Fill The Form')
    }
  }

  empSubmit(){
    if(!this.empDesg || !this.empName || !this.empSalary){
      alert("Please fill the form completely!")
    }else{
      alert(`------Employee Details------
      Employee Name: ${this.empName}
      Employee Designation: ${this.empDesg}
      Employee Salary: ${this.empSalary}`)
    }
  }
}
