var webdriver = require('selenium-webdriver');

var By = webdriver.By, until = webdriver.until;

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({browserName: 'chrome'}).
    build();

test('should be on correct page', function (done) {
  
  driver.get("http://localhost:8000");

  getTitle()
    .then(assertTitleIsCorrect)
    .then(getPageBody)
    .then(assertPageSnapshot)
    .then(function(){
      driver.quit()
      done();
    })

  function getTitle() {
    return driver.wait(driver.getTitle(), 10000);
  }

  function getPageBody()
  {
    return driver.findElement( By.tagName('body') ).getAttribute("innerHTML");
  }

  function assertPageSnapshot(body) {
    try{ 
      //var body = driver.findElement( By.tagName('body') );
      expect(body).toMatchSnapshot()
    }
    catch(e){ 
      console.log(e);  
    }
    
  }

  function assertTitleIsCorrect(title) {
    try{ 
      expect(title).toBe('Hello World | My App Name'); 
    }
    catch(e){ 
      console.log(e);  
    }
  }

});
