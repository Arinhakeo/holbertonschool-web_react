### Projet : Espaces de Noms et Fusion de Déclarations

### Traduction en Français de la Consigne du Projet

**Obligatoire :**

1. **Créer le répertoire `task_4`:**
   - Copiez le fichier `tsconfig.json` existant dans le répertoire `task_4`.
   - Créez un fichier `package.json` avec le contenu suivant :

```json
{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "typescript": "^3.6.4"
  }
}
```

2. **Créer le fichier `Teacher.ts` dans `task_4/js/subjects`:**
   - Définissez une interface `Teacher` dans un espace de noms nommé `Subjects`.
   - L'interface doit exiger `firstName` et `lastName` comme chaînes de caractères.

3. **Créer le fichier `Subject.ts` dans le même espace de noms :**
   - Écrivez une classe `Subject` dans l'espace de noms `Subjects`.
   - La classe doit avoir un attribut `teacher` qui implémente l'interface `Teacher`.
   - La classe doit avoir une méthode setter `setTeacher` qui accepte un enseignant en argument.

4. **Créer le fichier `Cpp.ts` dans le même espace de noms :**
   - En utilisant la fusion de déclarations, ajoutez un nouvel attribut optionnel `experienceTeachingC` (number) à l'interface `Teacher`.
   - Écrivez une classe `Cpp` qui étend `Subject`.
   - Écrivez une méthode nommée `getRequirements` qui renvoie une chaîne de caractères "Here is the list of requirements for Cpp".
   - Écrivez une méthode nommée `getAvailableTeacher` qui renvoie une chaîne de caractères "Available Teacher: <first name of teacher>". Si l'enseignant n’a pas d’expérience en enseignement C, la méthode doit renvoyer "No available teacher".

5. **Créer le fichier `React.ts` dans le même espace de noms :**
   - Ajoutez un nouvel attribut `experienceTeachingReact?` (number) à l'interface `Teacher`.
   - Dans la classe, écrivez une méthode nommée `getRequirements` qui renvoie une chaîne de caractères "Here is the list of requirements for React".
   - Écrivez une méthode nommée `getAvailableTeacher` qui renvoie une chaîne de caractères "Available Teacher: <first name of teacher>". Si l'enseignant n’a pas d’expérience en enseignement React, la méthode doit renvoyer "No available teacher".

6. **Créer le fichier `Java.ts` dans le même espace de noms :**
   - Ajoutez un nouvel attribut `experienceTeachingJava?` (number) à l'interface `Teacher`.
   - Dans la classe, écrivez une méthode nommée `getRequirements` qui renvoie une chaîne de caractères "Here is the list of requirements for Java".
   - Écrivez une méthode nommée `getAvailableTeacher` qui renvoie une chaîne de caractères "Available Teacher: <first name of teacher>". Si l'enseignant n’a pas d’expérience en enseignement Java, la méthode doit renvoyer "No available teacher".

**Repo :**

- Répertoire GitHub : `holbertonschool-web_react`
- Répertoire : `TypeScript`
- Fichiers : `task_4/package.json`, `task_4/tsconfig.json`, `task_4/js/subjects/Cpp.ts`, `task_4/js/subjects/Java.ts`, `task_4/js/subjects/React.ts`, `task_4/js/subjects/Subject.ts`, `task_4/js/subjects/Teacher.ts`

---

### Étapes Détaillées

#### Créer le Répertoire et Copier le Fichier de Configuration

1. **Créer le répertoire `task_4` :**
   ```bash
   mkdir task_4
   cd task_4
   ```

2. **Copier le fichier `tsconfig.json` :**
   - Assurez-vous que le fichier `tsconfig.json` est présent dans le répertoire `task_4`.

3. **Créer le fichier `package.json` :**
   - Créez un fichier `package.json` avec le contenu donné ci-dessus.

#### Créer les Fichiers dans `task_4/js/subjects`

1. **Créer le fichier `Teacher.ts` :**
   ```typescript
   // task_4/js/subjects/Teacher.ts
   export namespace Subjects {
       export interface Teacher {
           firstName: string;
           lastName: string;
       }
   }
   ```

2. **Créer le fichier `Subject.ts` :**
   ```typescript
   // task_4/js/subjects/Subject.ts
   import { Subjects } from './Teacher';

   export namespace Subjects {
       export class Subject {
           teacher!: Teacher;

           setTeacher(teacher: Teacher) {
               this.teacher = teacher;
           }
       }
   }
   ```

3. **Créer le fichier `Cpp.ts`:**
   ```typescript
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
   ```

4. **Créer le fichier `React.ts`:**
   ```typescript
   // task_4/js/subjects/React.ts
   import { Subjects } from './Teacher';
   import { Subject } from './Subject';

   export namespace Subjects {
       export interface Teacher {
           experienceTeachingReact?: number; // Fusion de déclaration
       }

       export class React extends Subject {
           getRequirements(): string {
               return "Here is the list of requirements for React";
           }

           getAvailableTeacher(): string {
               if (this.teacher.experienceTeachingReact > 0) {
                   return `Available Teacher: ${this.teacher.firstName}`;
               } else {
                   return 'No available teacher';
               }
           }
       }
   }
   ```

5. **Créer le fichier `Java.ts`:**
   ```typescript
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
   ```

### Compiler et Tester

1. **Configurer Webpack :**
   - Assurez-vous que votre fichier `webpack.config.js` est correctement configuré pour gérer les fichiers TypeScript.

2. **Compiler le Code :**
   ```bash
   npm run build
   ```

3. **Vérifier l'Intellisense :**
   - Ouvrez les fichiers dans votre IDE pour vérifier que l'intellisense fonctionne correctement et que les types sont reconnus.

### Synthèse

Ce projet démontre l'utilisation des espaces de noms et de la fusion de déclarations en TypeScript pour organiser et enrichir les types d'une application. En utilisant des espaces de noms, nous pouvons regrouper des types et des classes logiquement, tout en permettant la fusion de déclarations pour étendre des interfaces existantes. Cela améliore la lisibilité et la structure de notre code. Les classes `Cpp`, `React` et `Java` montrent comment les concepts de programmation orientée objet peuvent être appliqués pour créer des entités modulaires et réutilisables dans des applications TypeScript.