import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MeetingcardComponent } from "./components/meetingcard-component/meetingcard-component";
import { Completionchartcomponent } from "./components/completionchartcomponent/completionchartcomponent";

@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule, MeetingcardComponent, Completionchartcomponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {

}
