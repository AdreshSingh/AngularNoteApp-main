# AngularNoteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Version Notcies
 - 16.2.16 to 17.3.17
 ** Executing migrations of package '@angular/cli' **

> Replace usages of '@nguniversal/builders' with '@angular-devkit/build-angular'.
  Migration completed (No changes made).

> Replace usages of '@nguniversal/' packages with '@angular/ssr'.
  Migration completed (No changes made).

> Replace deprecated options in 'angular.json'.
UPDATE angular.json (2834 bytes)
  Migration completed (1 file modified).

> Add 'browser-sync' as dev dependency when '@angular-devkit/build-angular:ssr-dev-server' is used, 
as it is no longer a direct dependency of '@angular-devkit/build-angular'.
  Migration completed (No changes made).

** Executing migrations of package '@angular/core' **

> Angular v17 introduces a new control flow syntax that uses the @ and } characters.
  This migration replaces the existing usages with their corresponding HTML entities.
  Migration completed (No changes made).

> Updates `TransferState`, `makeStateKey`, `StateKey` imports from `@angular/platform-browser` to `@angular/core`.
  Migration completed (No changes made).

> CompilerOption.useJit and CompilerOption.missingTranslation are unused under Ivy.
  This migration removes their usage
  Migration completed (No changes made).

> Updates two-way bindings that have an invalid expression to use the longform expression instead.  
  Migration completed (No changes made).

## Version: 17 to 18
❯ Migrate application projects to the new build system.
  Application projects that are using the '@angular-devkit/build-angular' package's 'browser' and/or 'browser-esbuild' builders will be migrated to use the new 'application' builder.
  You can read more about this, including known issues and limitations, here: https://angular.dev/tools/cli/build-system-migration
    The output location of the browser build has been updated from "dist/angular-note-app" to "dist/angular-note-app/browser". You might need to adjust your deployment pipeline or, as an alternative, 
set outputPath.browser to "" in order to maintain the previous functionality.
UPDATE angular.json (2805 bytes)
UPDATE tsconfig.json (931 bytes)
  Migration completed (2 files modified).

** Executing migrations of package '@angular/core' **

❯ Updates two-way bindings that have an invalid expression to use the longform expression instead.
  Migration completed (No changes made).

❯ Replace deprecated HTTP related modules with provider functions.
  Migration completed (No changes made).

❯ Updates calls to afterRender with an explicit phase to the new API.
  Migration completed (No changes made).

❯ Adds `BootstrapContext` to `bootstrapApplication` calls in `main.server.ts` to support server rendering.
  Migration completed (No changes made).

## Version: 18 to 19
❯ Replaces `APP_INITIALIZER`, `ENVIRONMENT_INITIALIZER` & `PLATFORM_INITIALIZER` respectively with `provideAppInitializer`, `provideEnvironmentInitializer` & `providePlatformInitializer`.
  Migration completed (No changes made).

## Version: 19 to 20
