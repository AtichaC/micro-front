import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { CategoryAddService } from '../../services/category-add.service';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent {
  public category:any = {}
  name = input<string>("Name");
  description = input<string>("Description");
  constructor(private categorieService:CategoryAddService){
   this.category.name ='Category Add'
  }

 addCategory(){
  firstValueFrom(this.categorieService.addCategories(this.category)).then((result)=>console.log(result))
 }
}
