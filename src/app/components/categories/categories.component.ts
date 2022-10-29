import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesObservable = new Observable<any[]>();
  // below is another way to write above code
  // public categoryObservable: Observable<any[]> = new Observable();
  
  ProjCategoryBool: boolean = true;

  projectCategoryForm: FormGroup = new FormGroup({});
  loader: boolean = false;
  tempFile: any;

  constructor(private categoriesService : CategoriesService, private modalService : NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.categoriesObservable = this.categoriesService.getCategories();
  }

  openProjectCategoryDialog(modalRef:any, projectCategoryObj = null){
    //console.log(projectCategoryObj);
    this.initialForm(projectCategoryObj);
    this.modalService.open(modalRef);
  }

  // initialize forms
  initialForm(projectCategoryObj: any = null){
    if (projectCategoryObj === null){
      this.projectCategoryForm = this.formBuilder.group({
        categoryName: ["", Validators.required],
        categoryDescription: ["", Validators.required],
        categoryImageUrl: ["", Validators.required],
        categoryId: [null],
        active: [true],
        addedOn: [],
      });
    }else{
      this.projectCategoryForm = this.formBuilder.group({
        categoryName: [projectCategoryObj.categoryName, Validators.required],
        categoryDescription: [projectCategoryObj.categoryDescription, Validators.required],
        categoryImageUrl: [projectCategoryObj.categoryImageUrl, Validators.required],
        categoryId: [projectCategoryObj.categoryId],
        active: [projectCategoryObj.active],
      });
    }
  }

  checkFileType(event: any){
    this.tempFile = event.target.files[0];
    if(
      this.tempFile.type == "image/png" ||
      this.tempFile.type == "image/jpeg" ||
      this.tempFile.type == "image/jpg"
    ) {
      // console.log("File Ok");
    } else {
      // console.log("File Not Ok");
      this.tempFile = null;
      // this.toast.show("Only .png/.jpeg/.jpg file format accepted!!") 
    }
  }

}