import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorChromeModule } from 'ngx-color/chrome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatMenuModule} from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { ColorPickerDialogComponent } from './shared/components/color-picker-dialog/color-picker-dialog.component';
import { CardComponent } from './components/card/card.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DeleteTalkComponent } from './components/delete-talk/delete-talk.component';
import { EditTalkComponent } from './components/edit-talk/edit-talk.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerDialogComponent,
    CardComponent,
    DrawerComponent,
    DeleteTalkComponent,
    EditTalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FlexLayoutModule,
    LayoutModule,
    DragDropModule,
    ReactiveFormsModule, 
    FormsModule,
    CommonModule,
    ColorChromeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  entryComponents: [EditTalkComponent, DeleteTalkComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
