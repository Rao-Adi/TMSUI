import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header-component/header-component";

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './main-layout.html', 
  styleUrls: ['./main-layout.css'] // ✅ CORRECT
})
export class MainLayout {
  formName: string = '';
  formdescription: string = '';
  showdesc: boolean = false;
  showfavourite: boolean = false;
  addedfavourite: boolean = false;
  favPath: string = '/assets/images/favourites.png';
  favPath2: string = '/assets/images/favourites-active.png';
  toolTipText: string = 'Add to Favorites';
  FavMenuText: string = 'Mark as Favorite';
  isDelete: boolean = false;
  showfavouriteicon: boolean = false;
  EmpID: string = '0';
  CompanyName: string = 'Your Company';
  EmpName: string = 'Employee Name';
  EmployeePic: string = '/assets/images/pro.png';
  strBreadCrumb: string = 'Home / Dashboard';
  // @HostBinding('class.sidebar-open')
  isSidebarOpen: boolean = false;
  haveDashboardRights: boolean = true;
  onlineEvent$: Observable<Event> | undefined;
  offlineEvent$: Observable<Event> | undefined;
  subscriptions: Subscription[] = [];
  connectionStatusMessage: string = '';
  connectionStatus: string = 'online';
  showStatusMessage: boolean = false;
  isSidebarHovering = false;
}
