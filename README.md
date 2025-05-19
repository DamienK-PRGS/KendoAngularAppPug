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

## 🛠️ Instructions ✅

1. 👤 **Change the avatar** `DK` in the top-right corner of the page to your **own initials**
2. 🧩 **Add a new `employee` component**  
   > ℹ️ Use the command shown above to generate a component
3. 📄 In `app.component.ts`, **add a new `li` entry** in the `ul` list for `employees`, right under `customers`
4. 🧭 In `app.routes.ts`, **add a route** pointing to the `employee` component
5. 🧬 Open and update the file `sports2020.models.ts` to define the **`Employee` model**
6. 🔧 Modify `pasoe.service.ts` to add a new **`EmployeesService`**  
   > 🌐 Service URL: `http://localhost:8810/web/hr/employees`
7. 📊 In the employee grid, **display the following columns**:  
   - `LastName`, `FirstName`, `City`, `State`, `DepartmentName`  
   👉 With labels: **Last name**, **First name**, **City**, **State**, **Department**
8. 📋 There are only **55 employees** in the table.  
   ➕ Configure the grid to:
   - Show **all employees on a single page**
   - Enable the **`resizable`** property  
     👉 🔗 [Grid resizing documentation](https://www.telerik.com/kendo-angular-ui/components/grid/resizing-the-grid)
