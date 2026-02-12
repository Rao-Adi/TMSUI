import { Component } from '@angular/core';

interface Message {
  sender: string;
  content: string;
  type: 'text' | 'file';
  mine: boolean;
}

@Component({
  selector: 'app-chat-component',
  imports: [],
  templateUrl: './chat-component.html',
  styleUrl: './chat-component.css',
})
export class ChatComponent {
  messages: Message[] = [
    {
      sender: 'Emily Carter',
      content: 'Great, I will take a look.',
      type: 'text',
      mine: false,
    },

    {
      sender: 'me',
      content: 'Hey team, I pushed the latest changes.',
      type: 'text',
      mine: true,
    },

    {
      sender: 'me',
      content: 'deployment-log.txt',
      type: 'file',
      mine: true,
    },
  ];
}
