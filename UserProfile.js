class UserProfile {
    constructor(name, age, isVerified, isOnLine) {
        this.name = name;
        this.age = age;
        this.isVerified = isVerified;
        this.isOnLine = isOnLine;
    }
    greet(){
        console.log("Welcome, my name is !" + this.name + this.age + this.isVerified + this.isOnLine);
    }
}