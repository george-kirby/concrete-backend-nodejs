**QUICK START**

install packages

>npm i

Start server with hot update
(still requires page reload, but not manually restarting server)

>npm run dev


**INTRO**

A NodeJS backend for the Concrete app. Built using Express for handling routes, and MongoDB for database. 

Works with concrete-frontend (built in React).

**KEY DEPENDENCIES**

express - deals with routes
mongoose - connects to MongoDB database
morgan - console-logs request info (type, path, status code etc)
body-parser - parses JSON
expressValidator - validates inputs
cors - helps with CORS

**REFERENCE**

*Handling a request*

Relevant file in /routes uses Express to handle incoming request

Eg POST /tasks -> app.js -> /routes/tasks.js -> postTasks -> /controllers/tasks.js