import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.css']
})
export class PostCardsComponent implements OnInit {
@Input() postValues: any;
  constructor() { }

  ngOnInit() {
  }

}
