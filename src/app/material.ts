import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
    imports:[
        MatButtonModule,MatCardModule,
        MatInputModule,MatSnackBarModule,
        MatToolbarModule,MatDialogModule,
        MatIconModule,MatGridListModule,
        MatSidenavModule,DragDropModule
    ],
    exports:[
        MatButtonModule,MatCardModule,
        MatInputModule,MatSnackBarModule,
        MatToolbarModule,MatDialogModule,
        MatIconModule,MatGridListModule,
        MatSidenavModule,DragDropModule
    ]
})
export class MaterialModule{}