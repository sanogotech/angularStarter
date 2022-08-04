# angularStarter
Angular  Starter  SPA.

![Angular Components ](https://github.com/sanogotech/angularStarter/blob/main/docs/images/nav-diagramtourofheroes.png)

## Docs
- https://michaelscodingspot.com/web-application-development/
- https://www.techiediaries.com/angular-material-navigation-toolbar-sidenav/
- https://material.angular.io/
- https://mdbootstrap.com/docs/angular/ : Material Design for BootStrap
- https://www.telerik.com/blogs/angular-basics-how-to-use-services-angular
- https://angular.io/guide/cheatsheet
- https://www.knowledgehut.com/blog/web-development/angular-cheat-sheet
- https://angular.io/api/common/DecimalPipe
- https://angular.io/tutorial/toh-pt1
- https://angular.io/cli
- https://lachimi.com/angular/import-all-angular-material-components-into-your-module
- https://lachimi.com/angular/file-structure
## Install

- NodeJs  :  node --version
- npm  :  npm  --version
- Anglar CLI (ng)
```
npm cache clean --force
npm install -g  @angular/cli
ng version

```
* Anglar Material
```
ng add @angular/material
```

# Create Sample Project with angular/cli

```
npm cache clean --force
ng new  mysampleproject
```

##  Generate Component
```
ng generate --help
>ng generate component   ./components/hero-detail

```

## NB

Don't ever use the types Number, String, Boolean, Symbol, 
or Object These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript

## Setting up Angular Material 
* Angular Material v13, which will allow us to create a high-quality user interface for our applications

```
1. $ ng add @angular/material

2. Importing Angular Material Components : src/app/app.module.ts

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

3. Add Modules : src/app/app.module.ts

  imports: [
    .....,
    .....,
	
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]

4.
```
##  Debug Anglar with Augury chrome extension
