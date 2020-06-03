describe("expectdemo suite", function(){

    it("tobe test", function(){
        let x = 100;
        //toBe() demo
      //  expect(x).toBe(100);
       // expect(x).not.toBe(200);

        //toEqual() demo
      //  expect(x).toEqual(100);
       // expect(x).not.toEqual(200);

        //difference between toBe() and toEqual()
        let y = [10, 20, 30];
        let z = y;
      //  expect(y).toBe([10,20,30]); //failed toBe compares object with primitve value, here y is treated as object
        expect(y).toEqual([10,20,30]); //pass toEqual compares value with value, here y is treated as pimitive value

        expect(y).toBe(z); //both y nd z as objects


        browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
        expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails");
        expect(browser.getTitle()).toContain("AngularJS-Rails");

         // let arr = [10,20,30,40,50,60];
         // expect(arr).toContain(30);
        //  expect(arr).toContain(100); //failed
        //  expect(arr).not.toContain(100); //passed

        let names= ["David", "Jhon", "Kenedy"];
        expect(names).toContain("Kenedy");

        let value = 100;
        expect(value).toBeGreaterThan(50);
        expect(value).toBeLessThan(200);

       // expect(value).toBeNaN(); //NaN means tobe NotaNumber //fails
        //expect(value).not.toBeNaN();//pass

        let user = null;
        expect(user).toBeNull();  //pass
        expect(value).toBeNull(); //fails



    })
})