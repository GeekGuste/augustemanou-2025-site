import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/dao/project.service';
import { Project } from '../../models/projects';
import { IAlbum, Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  project?: Project;
  lightboxImages: IAlbum[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private lightbox: Lightbox
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.project = this.projectService.getProjectBySlug(slug);
      if (this.project?.images) {
        this.lightboxImages = this.project.images.map((img) => ({
          src: img,
          thumb: img,
          caption: this.project?.title
        }));
      }
    }
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.lightboxImages, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }
}
