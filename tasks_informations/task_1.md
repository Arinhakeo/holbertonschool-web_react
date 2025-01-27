## Projet : Création d'une Interface Enseignant en TypeScript

#### Étape 1 : Configuration de l'Environnement

1. **Créer le Répertoire `task_1`**
   - Ouvrez votre terminal ou invite de commande.
   - Naviguez vers le répertoire où vous souhaitez créer votre projet.
   - Exécutez la commande suivante pour créer le dossier :
     ```bash
     mkdir task_1
     cd task_1
     ```

2. **Copier les Fichiers de Configuration**
   - Assurez-vous d'avoir les fichiers suivants (vous pouvez les créer manuellement ou les copier depuis un modèle) :
     - `package.json`
     - `tsconfig.json`
     - `webpack.config.js`
   - Vous pouvez créer ces fichiers en utilisant un éditeur de texte ou via la ligne de commande. Voici comment créer un fichier `package.json` de base :
     ```json
     {
       "name": "task_1",
       "version": "1.0.0",
       "main": "js/main.ts",
       "scripts": {
         "build": "webpack"
       },
       "devDependencies": {
         "typescript": "^4.0.0",
         "webpack": "^5.0.0",
         "webpack-cli": "^4.0.0"
       }
     }
     ```
   - Répétez cela pour les autres fichiers en vous basant sur les configurations standards de TypeScript et Webpack.

#### Étape 2 : Création du Fichier TypeScript

1. **Créer le Fichier `main.ts`**
   - Dans le répertoire `task_1`, créez un dossier nommé `js` :
     ```bash
     mkdir js
     ```
   - Dans le dossier `js`, créez un fichier nommé `main.ts` :
     ```bash
     touch js/main.ts
     ```

2. **Écrire l'Interface `Teacher`**
   - Ouvrez `main.ts` avec un éditeur de texte et ajoutez le code suivant :
     ```typescript
     interface Teacher {
       firstName: string;
       lastName: string;
       fullTimeEmployee: boolean;
       yearsOfExperience?: number;
       location: string;
       [key: string]: any; // This allows for additional properties with any type
     }

     const teacher3: Teacher = {
       firstName: 'John',
       lastName: 'Doe',
       fullTimeEmployee: false,
       location: 'London',
       contract: false, // Adding a dynamic property
     };

     console.log(teacher3);
     ```
   - Ici, nous avons créé une interface `Teacher` qui définit les propriétés requises et ajoute la possibilité d'avoir d'autres propriétés dynamiques.

#### Étape 3 : Configuration de TypeScript et Webpack

1. **Configurer TypeScript**
   - Ouvrez le fichier `tsconfig.json` et assurez-vous qu'il contient le contenu suivant :
     ```json
     {
       "compilerOptions": {
         "target": "es5",
         "module": "commonjs",
         "strict": true,
         "esModuleInterop": true,
         "skipLibCheck": true,
         "forceConsistentCasingInFileNames": true
       },
       "include": [
         "js/**/*"
       ]
     }
     ```

2. **Configurer Webpack**
   - Dans le fichier `webpack.config.js`, ajoutez la configuration suivante :
     ```javascript
     const path = require('path');

     module.exports = {
       entry: './js/main.ts',
       output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
       },
       resolve: {
         extensions: ['.ts', '.js'],
       },
       module: {
         rules: [
           {
             test: /\.ts$/,
             use: 'ts-loader',
             exclude: /node_modules/,
           },
         ],
       },
     };
     ```

#### Étape 4 : Installation des Dépendances

1. **Installer TypeScript et Webpack**
   - Dans votre terminal, exécutez la commande suivante pour installer les packages nécessaires :
     ```bash
     npm install
     ```

#### Étape 5 : Compilation et Exécution

1. **Compiler le Code TypeScript**
   - Exécutez la commande suivante pour compiler le code :
     ```bash
     npm run build
     ```
   - Cela devrait générer un fichier `bundle.js` dans un répertoire `dist` (qui sera créé automatiquement).

2. **Vérifier les Erreurs de Type**
   - Assurez-vous qu'il n'y a pas d'erreurs de type dans la console. Le message `No type errors found` devrait apparaître.

#### Étape 6 : Validation du Résultat

1. **Exécuter le Code**
   - Vous pouvez exécuter le fichier `bundle.js` avec Node.js pour voir le résultat du `console.log` :
     ```bash
     node dist/bundle.js
     ```
   - Vous devriez voir la sortie de l'objet `teacher3` dans la console.

### Synthèse

Ce projet de création d'une interface `Teacher` en TypeScript démontre comment établir des types forts pour garantir la validité des données dans une application. En définissant des propriétés spécifiques tout en permettant des propriétés dynamiques, nous avons conçu un modèle flexible et extensible. La configuration de TypeScript et de Webpack a permis de gérer le processus de compilation, assurant ainsi une intégration facile et une exécution sans erreur. Ce projet illustre l'importance du typage et de la modularité dans le développement d'applications modernes, renforçant ainsi les bonnes pratiques de codage.