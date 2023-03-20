import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  

  constructor(private fb:FormBuilder,private es:EmployeService,private router:Router){
    
  }
  addForm=this.fb.group(
    {
      empname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      empid:['',[Validators.required,Validators.pattern('[0-9]+')]],
      empdesig:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      empsal:['',[Validators.required,Validators.pattern('[0-9]+')]],
      empexp:['',[Validators.required,Validators.pattern('[0-9]+')]]
    }
  )

  
  addData()
  {
    var ename=this.addForm.value.empname
    var eid=this.addForm.value.empid
    var edesi=this.addForm.value.empdesig
    var esal=this.addForm.value.empsal
    var eexp=this.addForm.value.empexp
    
    
  
    
      const result=this.es.addEmp(ename,eid,edesi,esal,eexp)
     if(this.addForm.valid)
     {
      if(result)
      {
        alert("added successfully")
        this.router.navigateByUrl("search")

      }
      else
      {
        alert("employee is already exist")
      }
     }
     else
     {
      alert('invalid form')
     }
    
    }
    // else
    // {
    //   alert("invalid form")
    // }
  
}
