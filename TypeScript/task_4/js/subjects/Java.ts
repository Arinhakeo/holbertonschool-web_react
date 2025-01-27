// task_4/js/subjects/Java.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

export namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number; // Fusion de déclaration
    }

    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}