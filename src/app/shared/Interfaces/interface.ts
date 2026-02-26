export interface Task {
  id: number;
  title: string;
  description?: string;
  priority: 'Low' | 'Medium' | 'High';
  storyPoints?: number;
  dueDate?: Date;
  assignees: string[];
  statusId: number;
}

export interface Column {
  id: number;
  name: string;
  tasks: Task[];
}