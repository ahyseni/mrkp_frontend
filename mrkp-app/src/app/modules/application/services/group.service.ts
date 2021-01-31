import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Group } from './group';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getActiveGroups() {

    return this.http.get<Group[]>('http://localhost:8080/api/v1/master-data/groups/active');
  }
  getGroupById() {

    return this.http.get<Group>('http://localhost:8080/api/v1/master-data/groups/6f568ccf-c4fe-4312-9786-8b92b2283e39');
  }

}
