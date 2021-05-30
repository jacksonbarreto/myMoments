import {NgModule} from '@angular/core';


import{ MediaItemComponent } from './media-item/media-item.component';
import{ TabsComponent } from './tabs/tabs.component';

@NgModule({
    declarations:[MediaItemComponent, TabsComponent],
    exports:[MediaItemComponent, TabsComponent]
})
export class ComponentsModule{}