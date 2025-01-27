## **Tâche 0 : Création d'une interface pour un étudiant**

### **Objectif :**
1. Créer une interface TypeScript `Student` qui représente les informations d'un étudiant.
2. Créer deux variables `student1` et `student2` de type `Student`.
3. Stocker ces variables dans un tableau `studentsList`.
4. Rendre une table HTML contenant le prénom (firstName) et la localisation (location) de chaque étudiant dans le tableau en utilisant JavaScript Vanilla.
5. Configurer Webpack pour compiler sans erreurs de typage.

---

### **Prérequis :**

1. **Dossiers et fichiers :** 
   - Copiez les fichiers de configuration suivants dans le dossier `task_0` :
     - `package.json`
     - `.eslintrc.js`
     - `tsconfig.json`
     - `webpack.config.js`

2. **Structure du dossier :**
   Votre dossier `task_0` devrait avoir la structure suivante :
   ```
   task_0/
   ├── js/
   │   └── main.ts
   ├── package.json
   ├── .eslintrc.js
   ├── tsconfig.json
   ├── webpack.config.js
   ```

---

### **Étape 1 : Configuration des fichiers**
Ces fichiers permettent de configurer votre environnement de travail pour utiliser TypeScript et Webpack.

- **`package.json` :** Ce fichier gère les dépendances du projet.
- **`.eslintrc.js` :** Configure ESLint pour s'assurer que le code respecte des bonnes pratiques.
- **`tsconfig.json` :** Configure TypeScript (version, options de compilation, etc.).
- **`webpack.config.js` :** Configure Webpack pour compiler votre code TypeScript en JavaScript.

Vérifiez que ces fichiers sont bien présents et fonctionnels.

---

### **Étape 2 : Écrire le code dans `main.ts`**

1. **Créer une interface `Student` :**
   - Une interface TypeScript définit la structure d'un objet.
   - Voici comment la créer :
     ```typescript
     interface Student {
         firstName: string;
         lastName: string;
         age: number;
         location: string;
     }
     ```

2. **Créer les variables `student1` et `student2` :**
   - Ces variables respectent l'interface `Student`.
     ```typescript
     const student1: Student = {
         firstName: "John",
         lastName: "Doe",
         age: 20,
         location: "New York"
     };

     const student2: Student = {
         firstName: "Jane",
         lastName: "Smith",
         age: 22,
         location: "Los Angeles"
     };
     ```

3. **Créer le tableau `studentsList` :**
   - Stockez les étudiants dans un tableau.
     ```typescript
     const studentsList: Student[] = [student1, student2];
     ```

4. **Générer une table HTML avec Vanilla JavaScript :**
   - Ajoutez un tableau au DOM (Document Object Model) pour afficher les informations des étudiants.
     ```typescript
     const table = document.createElement('table');
     const tbody = document.createElement('tbody');

     studentsList.forEach((student) => {
         const row = document.createElement('tr');

         const firstNameCell = document.createElement('td');
         firstNameCell.textContent = student.firstName;
         row.appendChild(firstNameCell);

         const locationCell = document.createElement('td');
         locationCell.textContent = student.location;
         row.appendChild(locationCell);

         tbody.appendChild(row);
     });

     table.appendChild(tbody);
     document.body.appendChild(table);
     ```

5. **Code complet pour `main.ts` :**
   Voici le fichier complet :
   ```typescript
   interface Student {
       firstName: string;
       lastName: string;
       age: number;
       location: string;
   }

   const student1: Student = {
       firstName: "John",
       lastName: "Doe",
       age: 20,
       location: "New York"
   };

   const student2: Student = {
       firstName: "Jane",
       lastName: "Smith",
       age: 22,
       location: "Los Angeles"
   };

   const studentsList: Student[] = [student1, student2];

   const table = document.createElement('table');
   const tbody = document.createElement('tbody');

   studentsList.forEach((student) => {
       const row = document.createElement('tr');

       const firstNameCell = document.createElement('td');
       firstNameCell.textContent = student.firstName;
       row.appendChild(firstNameCell);

       const locationCell = document.createElement('td');
       locationCell.textContent = student.location;
       row.appendChild(locationCell);

       tbody.appendChild(row);
   });

   table.appendChild(tbody);
   document.body.appendChild(table);
   ```

---

### **Étape 3 : Compilation avec Webpack**
1. **Installer les dépendances :**
   - Ouvrez un terminal dans le dossier `task_0` et exécutez :
     ```
     npm install
     ```

2. **Compiler avec Webpack :**
   - Lancez la commande suivante pour compiler le code TypeScript :
     ```
     npm run build
     ```

3. **Vérification :**
   - Assurez-vous que Webpack compile sans erreur et génère un fichier JavaScript valide.

---

### **Étape 4 : Résultat attendu**
Lorsque vous ouvrez le fichier HTML qui inclut le script généré par Webpack, vous devriez voir une table affichant les prénoms et les localisations des étudiants.

---

### **Points clés d'apprentissage :**
1. Comprendre et utiliser une interface TypeScript.
2. Manipuler le DOM avec JavaScript Vanilla.
3. Utiliser Webpack pour compiler du TypeScript.
4. Respecter les bonnes pratiques de développement avec ESLint.

---
