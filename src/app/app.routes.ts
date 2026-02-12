import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { DashboardComponent } from './feature/dashboard-component/dashboard-component';
import { NotificationsComponent } from './feature/notifications-component/notifications-component';
import { ChatComponent } from './feature/chat-component/chat-component';

export const routes: Routes = [
  // Layout wrapper
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      {
        path: 'chat',
        component: ChatComponent,
      },
      /* Dashboard */
      //   {
      //     path: 'dashboard',
      //     loadComponent: () =>
      //       import('@app/feature/dashboard-component/dashboard-component')
      //         .then(m => m.DashboardComponent)
      //   },

      /* Notifications */
      //   {
      //     path: 'notifications',
      //     loadComponent: () =>
      //       import('@app/feature/notifications-component/notifications-component')
      //         .then(m => m.NotificationsComponent)
      //   },

      /* Wildcard INSIDE layout */
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];
