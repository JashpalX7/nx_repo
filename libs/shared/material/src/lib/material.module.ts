import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';

//add form filed
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTreeModule } from '@angular/material/tree';
import {MatStepperModule} from '@angular/material/stepper';
// import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatTableModule,
        CdkTableModule,
        MatSortModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        CommonModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatCardModule,
        MatChipsModule,
        MatProgressBarModule,
        MatDividerModule,
        MatSidenavModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatExpansionModule,
        MatButtonToggleModule,
        DragDropModule,
        MatTreeModule,
        MatSnackBarModule,
        // OverlayPanelModule,
        MatStepperModule
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        // MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatTableModule,
        CdkTableModule,
        MatSortModule,
        MatCardModule,
        MatIconModule,
        MatChipsModule,
        MatToolbarModule,
        MatMenuModule,
        CommonModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatProgressBarModule,
        MatDividerModule,
        MatSidenavModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatExpansionModule,
        MatButtonToggleModule,
        DragDropModule,
        MatTreeModule,
        MatSnackBarModule,
        MatGridListModule,
        // OverlayPanelModule,
        MatStepperModule
    ],
    providers:[
        {
            provide: MatDialogRef,
            useValue: {}
        },
        MatSnackBarModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule {}