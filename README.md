# SAMEFA_PROJECT

* Project for RNCP certification

## Stack principal : 
* BDD : PostgreSQL, pgAdmin <br>
* NodeJs <br>
* ReactJs (CSS : Sass) <br>
* GitHub 


## Installation du projet : 
* Clone the repo: git clone <br> 
* Run "npm install"
* Ensure you have a PostgreSQL instance running with SSL enabled
* Ensure you have the proper environment variables configured for connecting to the instance

## Architecture des dossiers et lancement du projet : 
* Works in Mono-repo <br>
* "Frontend" launches from the path  "cd .\front-end\"  and runs with "npm start" <br>
* "Backend" launches from the path  "cd .\back-end\"  and runs with "npm run dev" <br>


## Convention de nommage et utilisation des branches :
* Naming branches accordingly to tickets <br>

## Regles et usage CSS
* Be careful to inheritance of styles: It's possible that other styles defined elsewhere in your CSS code or through default browser styles are being applied to your element, which might be influencing its style. These styles might have a higher priority than your current rule.

## Review Code
* Every PR must be reviewed and approved by another appointed developer before merging.<br> 
* Every PR must have few words to describe achieved work <br> 
* Every PR must be wrote in English <br>

