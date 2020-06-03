describe("ElementsSelectionDemoSuite", function(){

    it("HandleElementTest", function(){
        browser.get("http://www.trycatchclasses.com/code/demo/angular_crud/#");
        browser.sleep(3000);

        //adduser button click
        element(by.css('span[ng-click="addUser()"]')).click();

        //inutbox or textbox
        element(by.model("UserFirstname")).sendKeys("jhon");
        element(by.model("UserLastname")).sendKeys("Kendey");
        element(by.model("UserType")).sendKeys("5");

        //checkbox
        element(by.model("UserActive")).click();

        //save button click
        element(by.css('input[ng-click="AddUpdateUser()"]')).click();

        browser.sleep(5000);

        //switch to ALert window
        browser.switchTo().alert().accept;
       // let alert = browser.switchTo().alert();
        
        //expect(alert.getText()).toEqual("Error in getting users list");
        //alert.accept();
        browser.sleep(3000);

        element(by.model("search.type")).element(by.css('option[value="number:1"]')).click();
        browser.sleep(3000);



    })
});