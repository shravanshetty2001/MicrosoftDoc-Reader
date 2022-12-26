import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDto } from './class/search-dto';
import { SearchService } from './service/search.service';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'searchpage';
  sd: SearchDto[] = [];
  searchForm: FormGroup;
  sdto: SearchDto= new SearchDto();
  constructor
  (
   private route:Router,
   private formBuilder:FormBuilder,
   private service: SearchService
  ){}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      stext:[]
      
    })};
  onSubmit()
  {
    this.sdto.kword=String((<HTMLInputElement>document.getElementById("sp")).value);
    console.log(1);
    console.log(this.sdto.kword);
    this.service.SearchDoc(this.sdto).subscribe(
      (data) => {
        console.log(data);
        this.redirect();
      }
    
    )
  }
  redirect() {
    this.route.navigate(['/data']);;
  }
}
