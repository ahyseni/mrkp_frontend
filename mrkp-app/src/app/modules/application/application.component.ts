import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GroupService} from './services/group.service';
import { Observable} from 'rxjs';
import {Group} from './services/group';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  g$!: Group;
  query$!: string;
  Groups$!: Group[];


  constructor(private data: GroupService, @Inject(DOCUMENT) private document: Document) { }


  mrkplace_open() {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('myOverlay').style.display = 'block';
  }

  mrkplace_close() {
    document.getElementById("mySidebar").style.display = 'none';
    document.getElementById("myOverlay").style.display = 'none';
  }

  ngOnInit() {
       this.data.getActiveGroups().subscribe((
        data: Group[]) => {
           return this.Groups$ = data;
         }
    );
  }

}
