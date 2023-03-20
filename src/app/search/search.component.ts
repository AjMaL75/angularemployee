import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeService } from '../services/employe.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private fb:FormBuilder,private es:EmployeService){}
  finalresult:any
  searchForm=this.fb.group(
    {
      sear:['',[Validators.required,Validators.pattern('[0-9]+')]]
    }
  )
    search()
    {
        var s=this.searchForm.value.sear
        const result=this.es.getData(s)
        // console.log(result);
        
        this.finalresult=result
        if(result)
        {
        console.log(result);
        }
        else
        {
          alert("this data is doesnoy exist")
        }
        

    }
    
}
