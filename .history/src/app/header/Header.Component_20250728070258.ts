import{Component} from "@angular/core";
@Component({
    selector:'app-header',
    templateUrl: './Header.Component.html',
    standalone:true,
    imports:[],
    styleUrl:'./Header.Component.css',
})
export class HeaderComponent{
    title = "User Details Application";
}