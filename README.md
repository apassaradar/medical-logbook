# medical-logbook
CMU Medical Logbook

Installation
$ npx create-react-app 
$ npm install
$ npm install express --save

Running the app
# development client
$ npm run start

Development server
npm install --save-dev sequelize-cli
npm run dev
# or
yarn dev


Running the model and table
npx sequelize-cli db:migrate
 
Running seeds data  table
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all

Open http://localhost:3000 with your browser to see the result.


Learn More
https://sequelize.org/master/manual/migrations.html
https://reactjs.org/docs/getting-started.html
https://expressjs.com/
https://nodejs.org/en/docs/
