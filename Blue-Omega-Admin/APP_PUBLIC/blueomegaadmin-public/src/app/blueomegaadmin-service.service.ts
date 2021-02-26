import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Project } from './project';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class BlueomegaadminServiceService {

  private readonly baseUrl = 'http://localhost:3000';
  private projectsUrl = 'http://localhost:3000/api/projects';
  private membersUrl = 'http://localhost:3000/api/members';

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(`${this.baseUrl}/api/projects`)
      .pipe(map((projects: Project[]) => projects)).toPromise();
  }

  getSingleProject(projectId: string): Promise<void | Project> {
    return this.http.get(this.projectsUrl + '/' + projectId)
      .toPromise()
      .then(response => response as Project)
      .catch(this.handleError);
  }

  createProject(newProject: Project): Promise<void | Project> {
    return this.http.post(this.projectsUrl, newProject)
      .toPromise().then(response => response as Project)
      .catch(this.handleError);
  }

  deleteProject(projectId: String): Promise<void | Project> {
    return this.http.delete(this.projectsUrl + '/' + projectId)
      .toPromise()
      .then(response => response as Project)
      .catch(this.handleError);
  }

  getMembers() {
    return this.http.get(`${this.baseUrl}/api/members`)
      .pipe(map((members: Member[]) => members)).toPromise();
  }

  getSingleMember(memberId: string): Promise<void | Member> {
    return this.http.get(this.membersUrl + '/' + memberId)
      .toPromise()
      .then(response => response as Member)
      .catch(this.handleError);
  }

  createMember(newMember: Member): Promise<void | Member> {
    return this.http.post(this.membersUrl, newMember)
      .toPromise().then(response => response as Member)
      .catch(this.handleError);
  }

  deleteMember(memberId: String): Promise<void | Member> {
    return this.http.delete(this.membersUrl + '/' + memberId)
      .toPromise()
      .then(response => response as Member)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log("error");
  }
}
