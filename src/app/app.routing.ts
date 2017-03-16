import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component'
import { DegreeComponent } from './components/degree/degree.component'
import { ProjectComponent } from './components/project/project.component'
import { ProductComponent } from './components/product/product.component'
import { AboutmeComponent } from './components/aboutme/aboutme.component'
import { ContactComponent } from './components/contact/contact.component'
import { ExperienceComponent } from './components/experience/experience.component'

const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },{
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'degree',
        component: DegreeComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'aboutme',
        component: AboutmeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);