# SAMEFA_PROJECT

* Project for RNCP certification

## Stack principal : 
* ** BDD : PostgreSQL, PgAdmin <br>
* ** Host BDD : elephantSQL
* ** Back Express.js,Node.js <br>
* ** Front-end : React.js, (style :Sass) <br>
* ** Versionning :GitHub 


## Installation du projet : 
* Clone the repo: git clone <br> 
* Run ** "npm install"
* Ensure you have a PostgreSQL instance running with SSL enabled
* Ensure you have the proper environment variables configured for connecting to the instance

##Tests
Use Jest for unit tests and Supertest for integration tests.
*Run npm test to execute the tests

## Architecture des dossiers et lancement du projet : 
* Works in Mono-repo <br>
* "Frontend" launches from the path  "cd .\front-end\"  and runs with ** `npm start` <br>
* "Backend" launches from the path  "cd .\back-end\"  and runs with ** `npm run dev`<br>

## Contribution
* Create a branch for your feature from the main branch:** `git checkout -b new-feature`
* Make your changes and commit them:** `git add .` then `git commit -m 'Adding a new feature'`
* Push your changes to GitHub:** `git push`


## Convention de nommage et utilisation des branches :
* Naming branches accordingly to tickets <br>

## Regles et usage CSS
* Be careful to inheritance of styles: It's possible that other styles defined elsewhere in your CSS code or through default browser styles are being applied to your element, which might be influencing its style. These styles might have a higher priority than your current rule.

## Conventions de codage
* The project is organized into distinct sections, each with its own structure and coding conventions.
* Front-end et Back-end :
 - Run ESLint to check for linting errors: ** `npm run lint`
 - If necessary, apply automatic fixes for ESLint errors: ** `npm run lint:fix`
 - Use Prettier to format the code: ** `npm run format`
 - Use Prettier to fix erros in format the code: ** `npm run format:fix`

## Code Review 
* Every PR must be reviewed and approved by another appointed developer before merging.<br> 
* Every PR must have few words to describe achieved work <br> 
* Every PR must be wrote in English <br>

