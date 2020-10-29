import { Component, OnInit, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Talk } from '../../shared/models/schema.model';

@Component({
  selector: 'app-delete-talk',
  templateUrl: './delete-talk.component.html',
  styleUrls: ['./delete-talk.component.css']
})
export class DeleteTalkComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public talk: Talk) {}

  ngOnInit() {
  }

}
