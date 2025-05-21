# 🚀 PUG France - KendoAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## 🧪 Quick Start


- To start a local development server, run: `(npx) ng serve`.
- Once the server is running, open your browser and navigate to [`http://localhost:4200/`](http://localhost:4200/). The application will automatically reload when you modify any source files.
- Regularly check your page in the browser at: [`http://localhost:4200/`](http://localhost:4200/)
- To generate a new component, run: `ng generate component component-name` (see `ng generate --help` for more options)
- Use `CTRL + Space` for autocompletion
- Use `CTRL + Shift + F` to search across all project files

---

## 🛠️ Workshop Instructions ✅

### 1. ⚙️ Set Up the project
- Download and extract the source code from this release: [v1.0-workshop-start](https://github.com/DamienK-PRGS/KendoAngularAppPug/releases/tag/v1.0-workshop-start),  
or clone the repo and check out the workshop-start branch:
  ``` git
  git clone https://github.com/DamienK-PRGS/KendoAngularAppPug.git
  git checkout workshop-start
  ```  
- Run `npm install`
- Start the server with `(npx) ng serve`

### 2. 🚀 Update the Homepage
- Let's start simple by replacing the **"Get Started"** text in the home component template with:  
    **`Pug France 2025 : Get Started 🚀`**   
    *(💡Check the commented placeholder in the template)*

### 3. 🧩 Create the `employee` Component
- Generate a new component named `employee` using Angular CLI    
*(💡Reminder: see the command just above)*

### 4. 🧭 Set Up the Route
- In `app.routes.ts`, add a new route pointing to the Employee Component`.  
*(💡Check the placeholder comment in the routes file)*

### 5. 📄 Add a Navigation Entry
- In `app.component.ts`, update the `ul` list to include a new `<li>` item labeled `Employees`, right after the `Customers` entry.   
 *(💡Check the commented placeholder)*

> You should now be able to access the employee component and see:  `employee works!`

### 6. 📊 Create a Kendo Grid for Employee
> We want to display a grid listing all employee records, similar to the customers. Follow these steps:

- #### 6.1 🧬 Define the Employee Model
  In `sports2020.models.ts`, uncomment the predefined `Employee` class based on the API data structure.

- #### 6.2 🔧 Create the Employees Service
  In `pasoe.service.ts`, implement a new service called `EmployeesService`  

- #### 6.3 🗐 Copy/Paste with Confidence
  > Reuse or adapt code from customer.component.ts to build your employee component

  > In the `employee` component, use a **Kendo Angular Grid** to display the following fields:

  | Property         | Column Header   |
  |------------------|-----------------|
  | `LastName`       | Last name       |
  | `FirstName`      | First name      |
  | `City`           | City            |
  | `State`          | State           |
  | `DepartmentName` | Department      |

- #### 6.4 📋 Configure the Grid
  - Disable pagination to show all **55 employees** on one page (see `pageSize` and `pageable` properties)
  - Enable the new `resizable` feature 🔗 [Kendo Grid Resizing Documentation](https://www.telerik.com/kendo-angular-ui/components/grid/resizing-the-grid) and test it

- #### 6.5 🤓 Let's add some pics for the LastName column
  - Paste this snippet into your grid template:
  ```html
  <kendo-grid-column field="LastName" title="Last name" [width]="220">
    <ng-template kendoGridCellTemplate let-dataItem>
      <div class="employee-photo" [ngStyle]="{ 'background-image': photoURL(dataItem.EmpNum) }"></div>
      <div class="employee-name">{{ dataItem.LastName }}</div>
    </ng-template>
  </kendo-grid-column>
  ```       
  - Add the photoURL method in the component class:
  ```javascript
  public photoURL(EmpNum : number): string {
      const imageUrl =  `${environment.apiUrl}employees/${EmpNum}/profilepic`;
      return `url(${imageUrl})`;
  }
  ```    
  - 🎨 Finally, copy the following CSS into  `employee.component.css`

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
  ```

---
  


 

## 📚 Additional Resources
- [Worshop solutions](https://github.com/DamienK-PRGS/KendoAngularAppPug/releases/tag/v1.0-workshop-end)
- For more information on using the Kendo UI For Angular, visit the [Kendo UI for Angular home page](https://www.telerik.com/kendo-angular-ui).
- Learn Angular on [Angular home page](https://angular.dev/)
- Project repository is available here: [https://github.com/DamienK-PRGS/KendoAngularAppPug](https://github.com/DamienK-PRGS/KendoAngularAppPug)
- Run project on [StackBlitz](https://stackblitz.com/github/DamienK-PRGS/KendoAngularAppPug)


