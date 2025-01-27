// task_4/js/subjects/Cpp.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

export namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number; // Fusion de déclaration
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}