var webdriver = require("selenium-webdriver");
var By = webdriver.By;
var until = webdriver.until;
var driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();

var arrayOfObjects = [{"type":"get","URL":"https://issel.ee.auth.gr/publications/?lang=el","status":"PENDING","error":""},{"type":"select","identifier":"id","id":"your-publications-Year","input":"2016","status":"PENDING","error":""},{"type":"select","identifier":"id","id":"your-publications-Type","input":"book","status":"PENDING","error":""}];

for (var i = 0; i < arrayOfObjects.length; i++) {
	var object = arrayOfObjects[i];
	
	if (i != 0) {	
		if (object.identifier === "id") driver.wait(until.elementLocated({id: object.id}), 10000);
		else if (object.identifier === "name") driver.wait(until.elementLocated({name: object.id}), 10000);
		else if (object.identifier === "linkText") driver.wait(until.elementLocated({linkText: object.id}), 10000);
		else if (object.identifier === "className") driver.wait(until.elementLocated({className: object.id}), 10000);
		else if (object.identifier === "xpath") driver.wait(until.elementLocated({xpath: object.id}), 10000);
		else if (object.identifier === "css") driver.wait(until.elementLocated({css: object.id}), 10000);
		
		driver.sleep(1000);
	}
	
	if (object.type === "get") 
		driver.get(object.URL);
	else if (object.type === "click") {
		if (object.identifier === "id") driver.actions().mouseMove(driver.findElement(By.id(object.id))).click().perform();
		else if (object.identifier === "name") driver.actions().mouseMove(driver.findElement(By.name(object.id))).click().perform();
		else if (object.identifier === "linkText") driver.actions().mouseMove(driver.findElement(By.linkText(object.id))).click().perform();
		else if (object.identifier === "className") driver.actions().mouseMove(driver.findElement(By.className(object.id))).click().perform();
		else if (object.identifier === "xpath") driver.actions().mouseMove(driver.findElement(By.xpath(object.id))).click().perform();
		else if (object.identifier === "css") driver.actions().mouseMove(driver.findElement(By.css(object.id))).click().perform();
	}
	else if (object.type === "change") {
		if (object.identifier === "id") {
			//driver.findElement(By.id(object.id)).clear();
			driver.findElement(By.id(object.id)).sendKeys(object.input);
		}
		else if (object.identifier === "name") {
			//driver.findElement(By.name(object.id)).clear();
			driver.findElement(By.name(object.id)).sendKeys(object.input);
		}
		else if (object.identifier === "linkText") {
			//driver.findElement(By.linkText(object.id)).clear(); 
			driver.findElement(By.linkText(object.id)).sendKeys(object.input);
		}
		else if (object.identifier === "className") {
			//driver.findElement(By.className(object.id)).clear();
			driver.findElement(By.className(object.id)).sendKeys(object.input);
		}
		else if (object.identifier === "xpath") {
			//driver.findElement(By.xpath(object.id)).clear();
			driver.findElement(By.xpath(object.id)).sendKeys(object.input);
		}
		else if (object.identifier === "css") {
			//driver.findElement(By.css(object.id)).clear();
			driver.findElement(By.css(object.id)).sendKeys(object.input);
		}
	}
	else if (object.type == "select") {
			if (object.identifier === "id") {
				driver.actions().mouseMove(driver.findElement(By.id(object.id))).click().sendKeys(object.input).perform();
			}
			else if (object.identifier === "name") {
				driver.findElement(By.name(object.id)).sendKeys(object.input)
					.then(() => { deferred.resolve({'result': 'OK', 'error': ''}) })
					.catch((e) => { deferred.resolve({'result': 'FAIL', 'error': 'ELEMENT CANNOT BE ASSIGNED'}) });
			}
			else if (object.identifier === "linkText") {
				driver.findElement(By.linkText(object.id)).sendKeys(object.input)
					.then(() => { deferred.resolve({'result': 'OK', 'error': ''}) })
					.catch((e) => { deferred.resolve({'result': 'FAIL', 'error': 'ELEMENT CANNOT BE ASSIGNED'}) });
			}
			else if (object.identifier === "className") {
				driver.findElement(By.className(object.id)).sendKeys(object.input)
					.then(() => { deferred.resolve({'result': 'OK', 'error': ''}) })
					.catch((e) => { deferred.resolve({'result': 'FAIL', 'error': 'ELEMENT CANNOT BE ASSIGNED'}) });
			}
			else if (object.identifier === "xpath") {
				driver.findElement(By.xpath(object.id)).sendKeys(object.input)
					.then(() => { deferred.resolve({'result': 'OK', 'error': ''}) })
					.catch((e) => { deferred.resolve({'result': 'FAIL', 'error': 'ELEMENT CANNOT BE ASSIGNED'}) });
			}
			else if (object.identifier === "css") {
				driver.findElement(By.css(object.id)).sendKeys(object.input)
					.then(() => { deferred.resolve({'result': 'OK', 'error': ''}) })
					.catch((e) => { deferred.resolve({'result': 'FAIL', 'error': 'ELEMENT CANNOT BE ASSIGNED'}) });
			}
			driver.sleep(5000);
		}
	
}

driver.quit();

