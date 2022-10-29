import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  public errorMessage1: string = "OOPS... Something Went Wrong!!";
  public errorMessage2: string = "The page you are looking for has been removed or is not yet available";

  constructor() { }

  ngOnInit(): void {
  }

}
