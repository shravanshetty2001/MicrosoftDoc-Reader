import { Component } from '@angular/core';
import { Fileinfo } from '../class/fileinfo';
import { PassserviceService } from '../service/passservice.service';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-listdown',
  templateUrl: './listdown.component.html',
  styleUrls: ['./listdown.component.css']
})
export class ListdownComponent {
  matchedFiles:any=[];
  isLoaded=false;
  constructor(private service:SearchService,private passService:PassserviceService){}
  ngOnInit(): void {
    this.passService.invokeEvent.subscribe((value) => {
      this.matchedFiles = value;
      let it = this;
      setTimeout(() => {
        it.isLoaded = true;
      }, 2000);
    });
    };
}
