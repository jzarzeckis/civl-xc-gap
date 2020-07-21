import { TaskParticipant } from "./TaskParticipant"

export interface Sf {
  CheckTracklogs(task_id: number, participants: TaskParticipant[]): boolean
}
