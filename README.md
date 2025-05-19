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



---

# 🛠️ PUG Workshop Instructions ✅

## 0. 🚀 Update the Homepage
Replace the **"Get Started"** text on the homepage with:  
**`Pug France 2025 : Get Started 🚀`**

## 1. 👤 Customize the Avatar
Replace the default avatar `DK` in the top-right corner with your **own initials**.

## 2. 🧩 Create the `employee` Component
- Generate a new Angular component named `employee`
- Reuse or adapt code from `customer.component.ts` to build your `employee` component
- Copy the [CSS snippet](#-styles-for-employeecomponentcss) at the bottom of this file into `employee.component.css`

## 3. 📄 Add a Navigation Entry
In `app.component.ts`, update the `ul` list to include a new `<li>` item labeled `Employees`, right after the `Customers` entry.

## 4. 🧭 Set Up the Route
In `app.routes.ts`, add a new route pointing to the `EmployeeComponent`.  
> After this step, your employee grid should render — but initially, no data will be displayed.

## 5. 🧬 Define the Employee Model
Open `sports2020.models.ts` and define a proper `Employee` interface or class based on the data structure returned by the API.

## 6. 🔧 Create the Employees Service
In `pasoe.service.ts`, implement a new service method called `getEmployees()` (or similar).  
> 🌐 API Endpoint:  
> `https://pugfr2025-1.westeurope.cloudapp.azure.com:8811/web/hr/employees`

## 7. 📊 Display Employee Data in a Grid
In the `employee` component, use a **Kendo Angular Grid** to display the following fields:

| Property       | Column Header   |
|----------------|------------------|
| `LastName`     | Last name        |
| `FirstName`    | First name       |
| `City`         | City             |
| `State`        | State            |
| `DepartmentName` | Department     |

## 8. 📋 Configure the Grid
- Disable pagination so all **55 employees** are displayed on a single page
- Enable the new `resizable` column feature

🔗 [Kendo Grid Resizing Documentation](https://www.telerik.com/kendo-angular-ui/components/grid/resizing-the-grid)

---

# 🎨 Styles for `employee.component.css`

```css
.employee-photo {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: 32px 35px;
  background-position: center center;
  vertical-align: middle;
  line-height: 32px;
  box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0, 0, 0, 0.2);
  margin-left: 5px;
}

.employee-name {
  display: inline-block;
  vertical-align: middle;
  line-height: 32px;
  padding-left: 10px;
}

.red {
  color: #d9534f;
}

.text-bold {
  font-weight: 600;
}

.k-grid,
my-app,
body,
html {
  height: 100%;
}
  
# 💡 Tips

- Use `CTRL + Space` to trigger autocompletion
- Use `CTRL + Shift + F` to search across all project files
- Regularly check your page in the browser at: [`http://localhost:4200/`](http://localhost:4200/)
