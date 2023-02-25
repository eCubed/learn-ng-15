import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {

  id: number = 8
  name: string = ''

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.name = this.activatedRoute.snapshot.queryParams['name']
  }
}
