import { NgModule } from "@angular/core";
import { DropdownDirective } from "app/shared/dropdown.directive";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule {}