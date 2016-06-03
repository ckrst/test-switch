var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('https://wallet.s2way.com');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();


@driver.get(@base_url + "/#/app/main")
@driver.find_element(:xpath, "//input[@type='text']").clear
@driver.find_element(:xpath, "//input[@type='text']").send_keys "stacione"
@driver.find_element(:xpath, "//input[@type='password']").clear
@driver.find_element(:xpath, "//input[@type='password']").send_keys "senha"
@driver.find_element(:xpath, "//button[@type='submit']").click
(@driver.title).should == "S2Wallet"
