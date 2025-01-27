import { Subject } from './Subject';
import { Teacher } from './Teacher';

export interface ReactTeacher extends Teacher {
    experienceTeachingReact?: number; // Ajout de la fusion de déclaration
}

export class React extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
        if (this.teacher && (this.teacher as ReactTeacher).experienceTeachingReact && (this.teacher as ReactTeacher).experienceTeachingReact > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        } else {
            return 'No available teacher';
        }
    }
}
