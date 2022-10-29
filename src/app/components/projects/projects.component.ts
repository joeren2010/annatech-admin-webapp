import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from './../../services/categories.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsObservable = new Observable<any[]>();
  categoriesObservable = new Observable<any[]>();
  // below is another way to write above code
  // public projectObservable: Observable<any[]> = new Observable();
  // public categoryObservable: Observable<any[]> = new Observable();  

  constructor(private projectsService : ProjectsService, private categoriesService : CategoriesService, private modalService : NgbModal, private formBuilder: FormBuilder) { }  

  projectForm: FormGroup = new FormGroup({});
  projectModel: Projects | undefined;

  selectedImageIdx: number = 0;
  thumbnailImageIdx: number = 0;

  tempImageFiles: any[] = [];

  updation: boolean = false;
  loader: boolean = false;  


  ngOnInit(): void {
    this.projectsObservable = this.projectsService.getProjects();
    this.categoriesObservable = this.categoriesService.getCategories();
  }

  openModal(modal: any, project: Projects | null = null){
    this.tempImageFiles = [];    
    this.initializeModal(project);
    this.modalService.open(modal, { size: "xl" });
  }

  openImageModal(modal: any, imageUrls: string[], thumbnailImageIdx: number) {
  this.tempImageFiles = [...imageUrls];
  this.thumbnailImageIdx = thumbnailImageIdx;
  this.modalService.open(modal, { 
    size: "xl",
    scrollable: true 
  });
  }
  
  openImage(url: string) {
    window.open(url, "_blank")
  }

  viewProjectDetails(modal: any, projectObj: Projects) {
    this.projectModel = projectObj;
    this.modalService.open(modal, { size: 'lg' });
  }

  initializeModal(projectObj: Projects | null) {
    if (projectObj == null) {
      this.updation = false;
      this.projectForm = this.formBuilder.group({
        projectId: [],
        projectTitle: [null],
        price: [null],
        images: this.formBuilder.array([]),
        thumbnailImage: [null],
        projectDescription: [null],
        projectCategory: [null],
        active: [true],
        addedOn: [],
        rating: [0]
      });
    } else {
      this.updation = true;
      this.projectForm = this.formBuilder.group({
        projectId: [projectObj.projectId],
        projectTitle: [projectObj.projectTitle],
        price: [projectObj.price],
        images: [projectObj.images],
        thumbnailImage: [projectObj.thumbnailImage],
        projectDescription: [projectObj.projectDescription],
        projectCategory: [projectObj.projectCategory],
        active: [projectObj.active],
        addedOn: [projectObj.addedOn],
        rating: [projectObj.rating]
      });
      this.onSelectOption(projectObj.projectCategory);
      this.tempImageFiles = projectObj.images || [];
    }
  }

  onSelectOption(category: Category | Event | undefined) {
    // this.projectForm.patchValue({
    //   category: this.categories.find(x => x.categoryId === category.categoryId)
    // })
  }

  checkImageFileType(event: any) {
    let fileList: File[] = Object.assign([], event.target.files);
    fileList.forEach((file: any, idx: number) => {
      if (
        file.type == "image/png" ||
        file.type == "image/jpeg" ||
        file.type == "image/jpg"
      ) {
        this.tempImageFiles.push(file);
      } else {
        // this.toast.warning("Only .png/.jpeg/.jpg file format accepted!!", file.name + " will not accepted.");
      }
    });
  }


  removeImage(idx: number) {
    this.tempImageFiles.splice(idx, 1);
  }

  changeThumbnailImageIdx(idx: number) {
    this.projectForm.patchValue({
      thumbnailImage: idx
    })
  }

  compareByCategoryId(category1: Category, category2: Category) {
    return category1 && category2 && category1.categoryId === category2.categoryId;
  }
  
}


export interface Projects {
  projectId?: string;
  projectTitle?: string;
  projectCode?: string;
  projectDescription?: string;
  price?: number;
  projectCategory?: Category;
  images?: string[];
  thumbnailImage?: number;
  active?: boolean;
  addedOn?: Date;
  rating?: number;
}

export interface Category {
  categoryId?: string;
  categoryName?: string;
  categoryDescription?: string;
  categoryImageUrl?: string;
  createdOn?: Date;
  active?: boolean;
}