import{Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector:'app-header',
    templateUrl: './Header.Component.html',
    standalone:true,
    imports:[FormsModule],
    styleUrl:'./Header.Component.css',
})
export class HeaderComponent{
    title = "User Details Application";
}