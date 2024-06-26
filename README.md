��#   P r o j e c t 
 
 This is an Angular Project, designed specifically for educational purposes.
Use Angular for the client-side

✅ At least 4 (Four) different dynamic pages that fetch data from the back-end, allowing their content to change with the application state (pages like about, contacts, login, register do not count towards that figure)

✅ Specific pages for listing records and record details

✅ Communicate to a remote service (via REST, sockets, GraphQL, or a similar client-server technique)

✅Implement authentication

✅Implement all CRUD operations (create, read, update, delete)

✅At least 5 routes

✅ Meaningful commits to a source control system like GitHub, Bitbucket etc. for at least 3 days
✅Use TypeScript with specific types (avoid the type "any"), interfaces, pipes, observables

✅ Apply error handling and data validation to avoid crashes when invalid data is entered.

✅Implement route guards for the private AND the public part: guest users shouldn‘t be able to access private pages, logged-in users shouldn't be able to see the login/register pages

✅ Brief documentation on the project and project architecture (as .md file)

❌ Good usability. Good UI and UX. (NGBootstrap, MDL, CSS Grids or another method of your choice)

✅ The GitHub repo must be public.

The project includes home page, recipe-list page, add-recipe pag, all-comments page, comments for each recipe.
In order to change the page the page, the recipes-routing module is created.

The authentication component is created in order to check if the user is authenticated.

The guards component, which consists of the auth.activate.ts file is used in order to check whether the use is logged in.

The main module consists of all the main-pages: add-recipe(not working), commnets, current-recipe, home, main-content and recipes and recipes-routing. All the components are declared in the main module and then exported globally. 

The not-found component is used in order to show that a url is not found.

The shared module is used for all the components that are being used constantly in the app.

The use component is used for registration, loging and checking profile details about the profile,user-navigation and the user-service.
The user-service file takes care for all the http.get/post requests, in terms of logging in, registering, logging out, getting and updating the user-profile.

Api-service.ts is used to initiate all the api operations in terms of getting and setting data about the comments and recipes.

App-routing module navigates through parts of the app pages.
The app.interceptor.ts takes care for initiating a request to the server.





