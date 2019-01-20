import { NgModule } from "@angular/core";
import {MatButtonModule, MatCardModule,  MatPaginatorModule, MatToolbarModule, MatFormFieldModule} from '@angular/material';
@NgModule({
    imports: [MatButtonModule,MatCardModule,MatPaginatorModule,MatToolbarModule,MatFormFieldModule],
    exports: [MatButtonModule,MatCardModule,MatPaginatorModule,MatToolbarModule,MatFormFieldModule]
})
export class MaterialModule{}