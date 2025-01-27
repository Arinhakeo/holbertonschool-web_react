### Projet : Types Littéraux de Chaînes de Caractères

**Obligatoire :**

1. Écrivez un type littéral de chaîne de caractères nommé `Subjects` permettant à une variable d'avoir uniquement la valeur "Math" ou "History".

2. Écrivez une fonction nommée `teachClass` :
    - Elle prend `todayClass` comme argument.
    - Elle renvoie la chaîne de caractères "Teaching Math" si `todayClass` est "Math".
    - Elle renvoie la chaîne de caractères "Teaching History" si `todayClass` est "History".

**Résultat attendu :**

```typescript
teachClass('Math'); // Teaching Math
teachClass('History'); // Teaching History
```

**Repo :**

- Répertoire GitHub : `holbertonschool-web_react`
- Répertoire : `TypeScript`
- Fichier : `task_2/js/main.ts`


---

### Étapes Détaillées

1. **Définir le type littéral `Subjects`:**  Déclarez un type littéral de chaîne de caractères nommé `Subjects` qui accepte uniquement les valeurs "Math" ou "History".

2. **Créer la fonction `teachClass`:**  Créez la fonction `teachClass` qui prend un argument de type `Subjects` et renvoie la chaîne de caractères appropriée en fonction de la valeur de l'argument.  TypeScript vous aidera à vous assurer que seules les valeurs "Math" ou "History" sont acceptées.

3. **Intégrer dans `main.ts`:**  Ajoutez le type `Subjects` et la fonction `teachClass` à votre fichier `task_2/js/main.ts`.


Voici le code complet pour `task_2/js/main.ts` :

```typescript
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

const isDirector = (employee: Director | Teacher): employee is Director => {
  return employee instanceof Director;
};

const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
};


type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
};

console.log(teachClass('Math'));
console.log(teachClass('History'));
//console.log(teachClass('Science')); // Ceci provoquera une erreur de compilation
```

4. **Compiler et tester:**  Utilisez Webpack pour compiler votre code (`npm run build`) et testez l'exécution du code compilé (`node dist/bundle.js`). Vérifiez que la fonction `teachClass` fonctionne correctement et que la sortie correspond à l'attendu.  Essayez aussi d'appeler `teachClass` avec une valeur qui n'est ni "Math" ni "History" pour vérifier que TypeScript génère une erreur de compilation.


---

### Synthèse

Ce projet illustre l'utilisation des types littéraux de chaînes de caractères en TypeScript pour restreindre les valeurs possibles d'une variable.  Cela améliore la sécurité de type et la lisibilité du code.  La fonction `teachClass` utilise ce type littéral pour garantir que seul un ensemble défini de valeurs est accepté, améliorant ainsi la robustesse du code.
