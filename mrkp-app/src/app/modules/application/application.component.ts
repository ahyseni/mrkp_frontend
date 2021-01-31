import { Component, OnInit } from '@angular/core';
import { GroupService} from './services/group.service';
import { Observable} from 'rxjs';
import {Group} from './services/group';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  g$!: Group;
  query$!: string;
  Groups$!: Group[];

  showGroup(){
    this.query$ = 'Test';
  }

  constructor(private data: GroupService) { }

  ngOnInit() {
       this.data.getActiveGroups().subscribe((
        data: Group[]) => {
           return this.Groups$ = data;
         }
    );
  }

}
