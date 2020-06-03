let studentPage = function(){

let txtname = element(by.name("name"));
let txtcontact = element(by.name("contact"));
let drpsubject = element(by.name("subject"));
let txtmarks = element(by.name("marks"));
let btnSubmit = element(by.css('input[value="Submit"]'));

this.get = function(url){
    browser.get(url);
}

this.setname = function(name){
    txtname.sendKeys(name);
}

this.setContact = function(contact){
    txtcontact.sendKeys(contact);
}

this.setSubject = function(sub){
    drpsubject.element(by.xpath("//option[contains(text(),'"+sub+"')]")).click();
}

this.setMarks = function(marks){
    txtmarks.sendKeys(marks);
}

this.clickSubmit = function(){
    btnSubmit.click();
}

this.verifyResult = function(name, contact, sub, marks){
let rows = element.all(by.tagName("tr"));
if(sub !== ""){
expect(rows.get(0).element(by.xpath("//td[2]")).getText()).toBe(name);
expect(rows.get(0).element(by.xpath("//td[3]")).getText()).toBe(contact);
expect(rows.get(0).element(by.xpath("//td[4]")).getText()).toBe(sub);
expect(rows.get(0).element(by.xpath("//td[5]")).getText()).toBe(marks);
}
}
}


module.exports= new studentPage();