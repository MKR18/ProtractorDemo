describe("TableList demo", function(){
    beforeAll(function(){
        browser.get("https://dassdevarajan.github.io/demo-app/");
        browser.sleep(3000);
    });

    it("ValidateTablecontents", function(){
       var name = "1001 Activities Book"; 
       var description = "Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
       var category = "Books";
       var quantity = "300";
       var price = "4";
       var supplier = "ABC Publications"
       var returnable = "false";

       expect(element(by.tagName("h3")).getText()).toBe("Product List")

       //click on last table view button
        element.all(by.tagName("tr")).last().element(by.id("view")).click();
        browser.sleep(3000);
        //product detailpage validation
        expect(element(by.tagName("h3")).getText()).toBe("Product View")

        expect(element.all(by.tagName("tr")).get(0).element(by.tagName("td")).getText()).toBe(name);
        expect(element.all(by.tagName("tr")).get(1).element(by.tagName("td")).getText()).toBe(description);
        expect(element.all(by.tagName("tr")).get(2).element(by.tagName("td")).getText()).toBe(category);
        expect(element.all(by.tagName("tr")).get(3).element(by.tagName("td")).getText()).toBe(quantity);
        expect(element.all(by.tagName("tr")).get(4).element(by.tagName("td")).getText()).toBe(price);
        expect(element.all(by.tagName("tr")).get(5).element(by.tagName("td")).getText()).toBe(supplier);
        expect(element.all(by.tagName("tr")).get(6).element(by.tagName("td")).getText()).toBe(returnable);

     });

     it("Navigate to productlist page", function(){
        element(by.id("list-menu")).click();
        browser.sleep(3000);
        expect(element(by.tagName("h3")).getText()).toBe("Product List")

     });

     it("delete product", function(){
        element.all(by.tagName("tr")).get(1).element(by.id("delete")).click();
        browser.sleep(3000);
     });

 

});