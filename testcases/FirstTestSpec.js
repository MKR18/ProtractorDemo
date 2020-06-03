describe('angularjs homepage', function() {
    it("validate URL", function(){
     browser.get("https://angularjs.org");
     browser.sleep(5000);
     browser.manage().window().maximize();
     expect(browser.getCurrentUrl()).toBe("https://angularjs.org/");
    });

    it("validate title", function(){
        browser.get("https://angularjs.org");
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");  
    });
});