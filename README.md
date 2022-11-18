<h1 align="center"> # E-Commerce-SkillFactory </h1>

![Ecommerce](https://user-images.githubusercontent.com/74610866/202795570-6751f7d9-21db-47fe-8935-51a32e5987cb.png)

:computer: :computer: :computer: :computer:

<em> How to start the proyect with Vite: <em>

Asegúrate de tener instalado Node.js  en tu equipo.

Puedes comprobarlo ejecutando en la terminal:

$ node -v
Una vez lo tengas, ejecuta los siguientes comandos:

$ npm create vite@latest <nombre-de-mi-proyecto>
Entre los diferentes frameworks que te sugiere, elige el que necesites, en nuestro caso react. Después te pregunta si quieres utilizar TypeScript o no. Elige lo que prefieras.

✔ Project name: … vite-project
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte

? Select a variant: › - Use arrow-keys. Return to submit.
❯   JavaScript
    TypeScript
Scaffolding project in /Users/carlosazaustre/dev/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev
Ejecutar el proyecto.
Una vez creado, dirígete al directorio creado y ejecuta el comando de instalación:

$ cd <nombre-de-mi-proyecto>
$ npm install
Una vez instaladas las dependencias, ejecuta el comando de desarrollo y ya puedes empezar a trabajar.

$ npm run dev

  VITE v3.1.8 ready in 396 ms

  > Local: http://localhost:5173/
  > Network: use `--host` to expose
  
  :computer: :computer: :computer: :computer:
  
## :hammer:Funcionalidades del proyecto

- `Funcionalidad 1`: login proceso que controla el acceso individual utilizando credenciales mediante Firebase.- 
- `Funcionalidad 2`: landing page con productos en exposición y carrousel.- 
- `Funcionalidad 3`: componente ALL PRODUCTS para seleccionar los productos a comprar.-
- `Funcionalidad 4`: carrito de compras propiamente dicho (agrega productos, suma productos, elimina productos, finaliza compra).-

## :busts_in_silhouette: Integrantes:

:white_check_mark: https://github.com/BandaGriss780
:white_check_mark: https://github.com/CamiStefano
:white_check_mark: https://github.com/escobarGisele
:white_check_mark: https://github.com/dfma-89

## :heavy_plus_sign: Dependencias utilizadas:

:red_circle: "@reduxjs/toolkit": "^1.8.5"
:red_circle: "animate.css": "^4.1.1"
:red_circle: "dotenv": "^16.0.2"
:red_circle: "firebase": "^9.10.0"
:red_circle: "react": "^18.2.0"
:red_circle: "react-dom": "^18.2.0"
:red_circle: "react-redux": "^8.0.2"
:red_circle: "react-router-dom": "^6.4.1"
:red_circle: "sweetalert2": "^11.4.38"
:red_circle: "vanilla-tilt": "^1.7.2"
:red_circle: "@types/react": "^18.0.17"
:red_circle: "@types/react-dom": "^18.0.6"
:red_circle: "@vitejs/plugin-react": "^2.1.0"
:red_circle: "vite": "^3.1.0"

## How to clone our project:
git-clone - Clone a repository into a new directory

SYNOPSIS git clone [--template=] [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror] [-o ] [-b ] [-u ] [--reference ] [--dissociate] [--separate-git-dir ] [--depth ] [--[no-]single-branch] [--no-tags] [--recurse-submodules[=]] [--[no-]shallow-submodules] [--[no-]remote-submodules] [--jobs ] [--sparse] [--[no-]reject-shallow] [--filter= [--also-filter-submodules]] [--] []

DESCRIPTION Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository (visible using git branch --remotes), and creates and checks out an initial branch that is forked from the cloned repository’s currently active branch.

After the clone, a plain git fetch without arguments will update all the remote-tracking branches, and a git pull without arguments will in addition merge the remote master branch into the current master branch, if any (this is untrue when "--single-branch" is given; see below).

This default configuration is achieved by creating references to the remote branch heads under refs/remotes/origin and by initializing remote.origin.url and remote.origin.fetch configuration variables.

