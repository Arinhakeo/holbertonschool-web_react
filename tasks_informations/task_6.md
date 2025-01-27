### Projet : Fonctions Spécifiques aux Employés

**Obligatoire :**

1. Écrivez une fonction `isDirector` :
    - Elle accepte un employé (`employee`) comme argument.
    - Elle servira de prédicat de type et vérifiera si l'employé est un directeur.

2. Écrivez une fonction `executeWork` :
    - Elle accepte un employé (`employee`) comme argument.
    - Si l'employé est un directeur, elle appelle la méthode `workDirectorTasks`.
    - Si l'employé est un enseignant, elle appelle la méthode `workTeacherTasks`.

**Résultat attendu :**

```typescript
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
```

**Repo :**

- Répertoire GitHub : `holbertonschool-web_react`
- Répertoire : `TypeScript`
- Fichier : `task_2/js/main.ts`


---

### Étapes Détaillées

1. **Créer la fonction `isDirector`:**  Cette fonction utilise un prédicat de type pour vérifier si l'employé est une instance de la classe `Director`.

2. **Créer la fonction `executeWork`:** Cette fonction utilise le prédicat de type `isDirector` pour déterminer quelle méthode appeler (`workDirectorTasks` ou `workTeacherTasks`).  Elle utilise une assertion de type (`as Director` ou `as Teacher`) pour indiquer au compilateur TypeScript le type de l'employé une fois la vérification effectuée.

3. **Intégrer les fonctions dans `main.ts`:** Ajoutez les fonctions `isDirector` et `executeWork` à votre fichier `task_2/js/main.ts`.

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

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(executeWork(createEmployee('$500')));
```

4. **Compiler et tester:**  Utilisez Webpack pour compiler votre code (`npm run build`) et testez l'exécution du code compilé (`node dist/bundle.js`). Vérifiez que les fonctions `isDirector` et `executeWork` fonctionnent correctement et que la sortie correspond à l'attendu.


---

### Synthèse

Ce projet illustre l'utilisation des prédicats de type en TypeScript pour améliorer la sécurité et la lisibilité du code. La fonction `isDirector` sert de vérification de type avant d'effectuer des opérations spécifiques à un type donné.  La fonction `executeWork` utilise ce prédicat pour exécuter le bon code en fonction du type de l'employé.  Cela démontre une bonne pratique pour gérer le polymorphisme et éviter les erreurs de type au moment de l'exécution.
