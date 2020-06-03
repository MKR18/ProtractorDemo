describe("NonAngulaSuite", function(){

    it("myTest", function(){
       // browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.get("http://demowebshop.tricentis.com/");
        browser.manage().window().maximize();

        element(by.id("small-searchterms")).sendKeys("14.1-inch Laptop");
        element(by.css('input[class="button-1 search-box-button"]')).click();
        
        expect(element(by.css('img[alt="Picture of 14.1-inch Laptop"]')).isPresent()).toBe(true);
    });

});
