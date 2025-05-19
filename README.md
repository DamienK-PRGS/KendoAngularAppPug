# KendoAngularAppPug

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.








## Projet initial
- export class Employee doit être commenté
- supprimer l'entrée <li class="nav"><a routerLink="/employees" routerLinkActive="active">Employees</a></li> dans `app.component.ts` 
- supprimer la route employees dans le fichier `app.route.ts` 




## Tips 

- Utiliser CTRL+Space
- Utiliser CTRL+Shift+F pour rechercher dans les fichiers de votre projet
- Vérifier régulierement le rendu de votre page dans le navigateur: `http://localhost:4200/`

## workshop ✅

1. Changer l'Avatar `DK` en haut à droite de la page avec vos initiales
2. Rajouter un composant `employee` (voir la commande pour générer un nouveau composant ci-dessus)
3. dans `app.component.ts` rajouter une entrée dans la liste `ul` pour employees sous customers 
4. dans `app.routes.ts` rajouter la route pour le composant employee
5. consulter et modifier le fichier `sports2020.models.ts` pour obtenir la définition du modèle Employee
6. modifier le fichier `pasoe.service.ts` pour ajouter un nouveau service `EmployeesService` -- l'URL du service est `http://localhost:8810/web/hr/employees`
7. Nous voulons afficher les colonnes suivantes : LastName,FirstName,City,State,DepartmentName -- Le libellé des colonnes sera Last name,First name,City,State,Department
8. il n'y a que 55 employés dans la table. Ajoutez le grid pour qu'il affiche tous les employés sur une seule page et utiliser la nouvelle propriété `resizable` du grid  : `https://www.telerik.com/kendo-angular-ui/components/grid/resizing-the-grid`


## todo
- A la selection dans nav je veux conserver la couleur bleue foncée pour ne pas à avoir à remettre le titre afficher le portrait des employés ✅  
-


<img src="https://img.icons8.com/ios-filled/50/000000/angularjs.png" width="20" /> Angular ✅