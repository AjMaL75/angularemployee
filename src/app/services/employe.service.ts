import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor() { }
  
  employeeDetails:any={}
 addEmp(enam:any,eid:any,edesig:any,esal:any,exp:any)
 {
  
  
   if(eid in this.employeeDetails)
   {
      return false
   }
   else{
      
     this.employeeDetails[eid]={empname:enam,empid:eid,empdesig:edesig,empsal:esal,empexp:exp}
     console.log(this.employeeDetails);
    //  localStorage.setItem(this.employeeDetails.empid,JSON.stringify(this.employeeDetails))
     
     return true
   }

  
 }
 getData(emid:any)
 {
    // if(emid in localStorage)
    // {
      
      
    //   return localStorage.getItem(JSON.parse(emid))
     
    // }
    // else{
      
    //   return false
    // }
    if(emid in this.employeeDetails)
    {
      
      
      return this.employeeDetails[emid]
     
    }
    else{
      
      return false
    }
 }
}
