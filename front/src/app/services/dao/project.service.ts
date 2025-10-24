import { Injectable } from '@angular/core';
import { Project } from '../../models/projects';
import { DATA } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = DATA.portfolio.projects;

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(p => p.slug === slug);
  }
}
