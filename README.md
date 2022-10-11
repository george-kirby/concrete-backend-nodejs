**QUICK START**

install packages

>npm i

Start server with hot update
(still requires page reload, but not manually restarting server)

>npm run dev


**INTRO**

A NodeJS backend for the Concrete app. Built using Express for handling routes. 

Works with concrete-frontent (built in React).


**REFERENCE**

*Handling a request*

Relevant file in /routes uses Express to handle incoming request

Eg POST /tasks -> app.js -> /routes/tasks.js -> postTasks -> /controllers/tasks.js