import { Component, EmbeddedViewRef, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // This import is correct
import { MatIconModule } from '@angular/material/icon';

export interface SidebarItem {
  label: string;
  icon?: string;
  route?: string;
  active?: boolean;
  children?: SidebarItem[];
  expanded?: boolean;
}

export const SIDEBAR_MENU: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: 'home',
    route: '/dashboard',
    active: true,
  },
  {
    label: 'Notifications',
    icon: 'bell',
    route: '/notifications',
  },
  {
    label: 'Favorites',
    icon: 'star',
    route: '/favorites',
  },
  {
    label: 'Chat',
    icon: 'message-circle',
    route: '/chat',
  },
   {
    label: 'Task Board',
    icon: 'task-board',
    route: '/task-board',
  },
  {
    label: 'Admin',
    icon: 'shield',
    route: '/admin',
  },

  // SPACES
  {
    label: 'SPACES',
    children: [
      {
        label: 'Product Development',
        icon: 'box',
        children: [
          {
            label: 'Q3 Sprint',
            icon: 'folder',
            children: [
              {
                label: 'Frontend Tasks',
                icon: 'file',
                route: '/tasks/frontend',
              },
              {
                label: 'Backend Tasks',
                icon: 'file',
                route: '/tasks/backend',
              },
            ],
          },
          {
            label: 'UI/UX Revamp',
            icon: 'folder',
            route: '/tasks/ui',
          },
        ],
      },
      {
        label: 'Marketing',
        icon: 'box',
        route: '/marketing',
      },
    ],
  },
];

export interface MenuItem {
  Text: string; // Was 'text'
  Value: string; // Was 'value'
  NavigateUrl?: string; // Was 'navigateUrl'
  Class?: string; // Was 'class'
  count?: number; // Kept from original
  imageUrl?: string; // Kept from original
  ClsSep?: string; // Was 'clsSep'
  CLSSEP?: string; // Added from RealData.txt
  formdescription?: string; // Kept from original (is lowercase in RealData.txt)
  child?: MenuItem[]; // Kept from original (is lowercase in RealData.txt)
  subChild?: MenuItem[]; // Kept from original (is lowercase in RealData.txt)
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule, MatIconModule], // Added CommonModule for ngIf/ngFor if needed
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  menu: SidebarItem[] = SIDEBAR_MENU;
 

  toggle(item: SidebarItem) {
    item.expanded = !item.expanded;
  }
}
