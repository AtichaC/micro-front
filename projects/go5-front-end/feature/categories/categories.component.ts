import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { firstValueFrom, Subscription } from 'rxjs';
import { CategoriesModel } from '../../models/categories/categories.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  constructor(private categoriesService: CategoriesService) {}
  public category: CategoriesModel[] =[];
  _category$?: Subscription;
  ngOnInit() {
    this._category$ = this.categoriesService.getCategories().subscribe(
      (result) => {
        this.category = result;
      },
      (error) => (err: any) => {
        console.log(err);
      }
    );

    //  firstValueFrom(this.categoriesService.getCategories()).then((result)=>{
    //     console.log(result)
    //   }).finally(()=>{

    //   }).catch(()=>{

    //   })
  }
  ngOnDestroy() {
    this._category$?.unsubscribe();
  }
}
