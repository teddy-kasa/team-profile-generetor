const Employee = require("../lib/Employee");

describe('Employee', () => {
    // ERROR FOR NO PARAMETERS
    it("throws an Error if no parameters are passed", () => {
        expect(() => {
            new Employee();
        }).toThrow(console.error('Please enter a valid name, id, and email'))
    })
    // ERROR FOR NO NAME PARAMETER
    it("throws an Error if an invalid name is passed", () => {
        expect(() => {
            new Employee(1, 10, "email@email.com");
        }).toThrow(console.error('Please enter a valid name'))
    })
        // ERROR FOR NO ID PARAMETER
    it("throws an Error if an invalid id is passed", () => {
        expect(() => {
            new Employee("Rob", "ten", "email@email.com");
        }).toThrow(console.error('Please enter a valid id'))
    })
        // ERROR FOR NO EMAIL PARAMETER
    it("throws an Error if an invalid email is passed", () => {
        expect(() => {
            new Employee("Rob", 10, 1);
        }).toThrow(console.error('Please enter a valid email'))
    })

    // Now for when it does work 
    it("creates new employee object when all parameters are passed", () =>{
        expect(new Employee("Rob", 10, "email@email.com")).toEqual({name: "Rob", id: 10, email: "email@email.com"})
    })
    it("returns the correct name when getName() is called", () =>{
        const employee = new Employee("Rob", 10, "email@email.com")
        expect(employee.getName()).toEqual("Rob")
    })
    it("returns the correct ID when getId() is called", () =>{
        const employee = new Employee("Rob", 10, "email@email.com")
        expect(employee.getId()).toEqual(10)
    })
    it("returns the correct Email when getEmail() is called", () =>{
        const employee = new Employee("Rob", 10, "email@email.com")
        expect(employee.getEmail()).toEqual("email@email.com")
    })
    it("returns 'Employee' when getRole() is called", () =>{
        const employee = new Employee("Rob", 10, "email@email.com")
        expect(employee.getRole()).toEqual("Employee")
    })


})