let studentPage = require('../pages/StudentPage');

describe("mysuite", function(){

    it("pomTest", function(){
        studentPage.get("http://www.trycatchclasses.com/code/demo/angular4_crud/#");

        studentPage.setname("john");
        studentPage.setContact("India");
        studentPage.setSubject("CSS");
        studentPage.setMarks("100");
        browser.sleep(5000);

        studentPage.clickSubmit();

        studentPage.verifyResult("john", "India", "CSS", "100");
        browser.sleep(5000);

    })
});


