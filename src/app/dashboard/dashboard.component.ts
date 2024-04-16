import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BetslipComponent } from "./betslip/betslip.component";
import { EventComponent } from "./event/event.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [HeaderComponent, BetslipComponent, EventComponent]
})
export class DashboardComponent {

}
