import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    ProjectsComponent,    
    ProjectViewComponent,
    ProjectCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
