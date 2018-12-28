import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmap',
  templateUrl: './showmap.component.html',
  styleUrls: ['./showmap.component.css']
})
export class ShowmapComponent implements OnInit {
  lati=0;
  constructor() { }
  latitude(){
    const lati = this.lati
    console.log(lati)
  }
  handleSubmit(event){
    event.preventDefault();
    const form = new FormData(event.target)
    const Latitude = form.get ('Latitude')
    console.log(Latitude)
  }
  ngOnInit() {
  }

}
