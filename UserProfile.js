class UserProfile {
    constructor(name,age,isOnLine) {
        this.name = name;
        this.age = age;
        this.isOnLine = isOnLine;
    }
    greet(){
        console.log("Welcome, my name is !" + this.name + this.age + this.isOnLine);
    }
}