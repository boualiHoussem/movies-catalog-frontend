import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";

const routes: Routes = [
    {
        path: '',
        component: HeaderComponent
    }
]

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        HeaderComponent
    ]
})
export class MenuModule { }