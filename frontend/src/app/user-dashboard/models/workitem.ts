export  interface Workitem {
    claimId: number;
    workitemId: number;
    dateSubmitted: string | Date;
    dueDate: string | Date;
    status: string;
    queue: string;
    priority: string;
  }