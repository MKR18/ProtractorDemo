describe("my suite", function(){

    beforeEach(function(){
        console.log("Login ........")
    })
    afterEach(function(){
        console.log("logout.....")
    })

    beforeAll(function(){
        console.log("Opening APP....")
    })
    afterAll(function(){
        console.log("closing app.......")
    })

    it("my search test", function(){
        console.log("searh test is execting........")
    })
    
    it("my advanced search test", function(){
        console.log("advanced searh test is executing ........")
    })


})