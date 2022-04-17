import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  faFilter = faBars;
  faSearch = faSearch;
  @ViewChild('El') div!: ElementRef;

  constructor(public call: CallService) { }

  ngOnInit(): void {
  }

  onToggle(checked: boolean){
this.call.sendToggle(checked); 
}

onSearch(value: string) {
  this.call.sendSearch(value); 
  }

  collapse(){
   if(this.div.nativeElement.getAttribute('class')==='normal'){
    this.div.nativeElement.setAttribute('class','disabled')
   } else {
    this.div.nativeElement.setAttribute('class','normal')

   }
  }
}
