import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, input, Input, model, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [],
  template: "",
})
export class CategoryAddComponent {
  constructor(private viewContainer: ViewContainerRef) {}
  ngOnInit() {
    console.log('module');
    const modules =loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4001/remoteEntry.js',
      exposedModule: './CategoryAdd',
    });

    console.log('module', modules);
  }
}

