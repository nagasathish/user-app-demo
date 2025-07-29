import{Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
@Component({
    selector:'app-header',
    templateUrl: './Header.Component.html',
    standalone:true,
    imports:[FormsModule, RouterLink],
    styleUrl:'./Header.Component.css',
})
export class HeaderComponent{
    title = "User Details Application";
}