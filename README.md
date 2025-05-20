# 🚀 PUG France - KendoAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.


- To start a local development server, run: `ng serve`.
- Once the server is running, open your browser and navigate to [`http://localhost:4200/`](http://localhost:4200/). The application will automatically reload whenever you modify any of the source files.
- Regularly check your page in the browser at: [`http://localhost:4200/`](http://localhost:4200/)
- To generate a new component, run: `ng generate component component-name` (see `ng generate --help` for help)
- Use `CTRL + Space` to trigger autocompletion
- Use `CTRL + Shift + F` to search across all project files

---

## 🛠️ Workshop Instructions ✅

### 1. 🚀 Update the Homepage
Let's start simple by replacing the **"Get Started"** text on the homepage with:  **`Pug France 2025 : Get Started 🚀`**

### 2. 🧩 Create the `employee` Component
- Generate a new component named `employee` using Angular CLI (💡check how to generate a new angular component just above)
- Reuse or adapt code from `customer.component.ts` to build your `employee` component
- Copy the [CSS snippet](#-styles-for-employeecomponentcss) at the bottom of this file into `employee.component.css`

### 3. 📄 Add a Navigation Entry
In `app.component.ts`, update the `ul` list to include a new `<li>` item labeled `Employees`, right after the `Customers` entry.

### 4. 🧭 Set Up the Route
In `app.routes.ts`, add a new route pointing to the `EmployeeComponent`.  
> After this step, your employee grid should render — but initially, no data will be displayed.

### 5. 🧬 Define the Employee Model
Open `sports2020.models.ts` and define a proper `Employee` class based on the data structure returned by the API.

### 6. 🔧 Create the Employees Service
In `pasoe.service.ts`, implement a new service called `EmployeesService`  
> 🌐 API Endpoint:  
> `https://pugfr2025-1.westeurope.cloudapp.azure.com:8811/web/hr/employees`(https://pugfr2025-1.westeurope.cloudapp.azure.com:8811/web/hr/employees)

### 7. 📊 Display Employee Data in a Grid
In the `employee` component, use a **Kendo Angular Grid** to display the following fields:

| Property         | Column Header   |
|------------------|-----------------|
| `LastName`       | Last name       |
| `FirstName`      | First name      |
| `City`           | City            |
| `State`          | State           |
| `DepartmentName` | Department      |

### 8. 📋 Configure the Grid
- Disable pagination so all **55 employees** are displayed on a single page
- Enable the new `resizable` column feature 🔗 [Kendo Grid Resizing Documentation](https://www.telerik.com/kendo-angular-ui/components/grid/resizing-the-grid)

### 9. 🤓 Let's add some pics
- Copy this code and paste it in your grid:
```html
<kendo-grid-column field="LastName" title="Last name" [width]="220">
  <ng-template kendoGridCellTemplate let-dataItem>
    <div class="employee-photo" [ngStyle]="{ 'background-image': photoURL(dataItem.EmpNum) }"></div>
    <div class="employee-name">{{ dataItem.LastName }}</div>
  </ng-template>
</kendo-grid-column>
```       
- Now add the photoURL Method: 
```javascript
public photoURL(EmpNum : number): string {
    const imageUrl =  `const imageUrl =  `${environment.apiUrl}employees/${EmpNum}/profilepic`;`;
    return `url(${imageUrl})`;
}
```     



---

### 🎨 Styles for `employee.component.css`

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
```

---
  


 

## 📚 Additional Resources

- For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
- Project repository is available here: [https://github.com/DamienK-PRGS/KendoAngularAppPug](https://github.com/DamienK-PRGS/KendoAngularAppPug)



