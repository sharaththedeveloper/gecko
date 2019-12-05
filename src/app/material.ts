import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[MatButtonModule,MatCardModule,MatInputModule,MatSnackBarModule,MatToolbarModule],
    exports:[MatButtonModule,MatCardModule,MatInputModule,MatSnackBarModule,MatToolbarModule]
})
export class MaterialModule{}