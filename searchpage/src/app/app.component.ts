import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDto } from './class/search-dto';
import { SearchService } from './service/search.service';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { ListdownComponent } from './listdown/listdown.component';
import { PassserviceService } from './service/passservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'searchpage';
  //sd: SearchDto[] = [];
  matchedFiles: any;
  searchForm: FormGroup;
 // sdto: SearchDto= new SearchDto();
 @Output() msgToSibling = new EventEmitter<any>();
  
  constructor
  (
   private route:Router,
   private formBuilder:FormBuilder,
   private service: SearchService,
   private passService: PassserviceService
   //private listDownComponent: ListdownComponent 
  ){}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      stext:[]
      
    })};
  onSubmit()
  {
    let toSearch = {
      query: this.searchForm.value.stext,
      type: "none"
    };
    // console.log(1);
    // console.log(this.sdto.kword);
    this.service.SearchDoc(toSearch).subscribe(
      (data) => {
        console.log(data);
        this.matchedFiles=data;
        this.redirect();
      }
    )
  }
  moveToSib() {
    this.msgToSibling.emit(this.matchedFiles);
  }
  redirect() {
    this.passService.invokeEvent.next(this.matchedFiles);
    this.route.navigate(['/data']);
    this.moveToSib();
  }
}
