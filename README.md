# njs-mdb
NodeJS and MongoDB integrated app test

Download and install NodeJS and npm onto your computer
Download file onto your computer from Github
Make sure to download the following modules using npm (because I didn't upload node-modules using Git):
    cd njs-mdb                                         << navigate to directory
    npm install -save body-parser express mongodb      << install modules
    npm install --save-dev nodemon                     << install test environment
    npm run dev (or node server.js)                    << start backend api

Download and use Postman ->     localhost:5000/resumes to test POST function
                                localhost:5000/resumes/:id to test GET, PUT, DELETE functions
Links to mLab test database