# Web Recorder Frontend

Web Recorder's frontend is responsible for the presentation of tests results, steps editing, suite scheduling and more. You can access Web Recorder's website from [here](http://snf-750380.vm.okeanos.grnet.gr:8080) or you can install it locally. More information about Web Recorder's functionality can be found [here](http://snf-750380.vm.okeanos.grnet.gr:8080/documentation).

## Installation
### Manual installation
In order to install Web Recorder's frontend locally to your PC you have to previously install Angular CLI, typing this command:
```
npm install -g @angular/cli
```

After Angular CLI installation, you have to install all the required packages needed for deployment, running this command to frontend folder:
```
npm install
```

Then it's time to build the application, using `--prod` flag for production use and `--aot` flag so that the compiler runs once at build time using one set of libraries:
```
ng build --prod --aot
```

### Running
Have installed all the required packages and built the application, it's time to run it. There are two options to run:
1) Using `ng serve`. The application will listen by default to port 4200. You can change listening port with `--port <port>` flag. It is recommended to use 8080 port so you don't have to change listenig URL to backend files.
2) Using `node server.js`. The application will listen to 8080 port. In order ro change it you have to modify `server.js` file:
```
...
app.listen(8080, function() {
    console.log('Frontend app listening on port 8080!');
});
```
