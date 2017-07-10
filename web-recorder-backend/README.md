# Web Recorder Backend
Backend represents all the logic behind the scenes. It is responsible for test running and scheduling. Backend's API can be accessed from http://snf-7503980.vm.okeanos.grnet.gr:4000 or can be installed locally to your PC. You can see documentation's API [here][documentation].

[documentation]: http://snf-750380.vm.okeanos.grnet.gr:8080/documentation

## Installation
### Docker Installation

### Manual Installation
For manual installation you have to install these packages:
1) Selenium Wedriver using npm
```
$ npm install selenium-webdriver
```
2) MongoDB

 First we have to import the key for the official MongoDB repository.
```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
```

Issue the following command to create a list file for MongoDB.
```
$ echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
```
