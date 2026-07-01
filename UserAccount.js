class UserAccount{
   constructor() {
   } accountProperties(userName, email, followerCount, isVerified){
        this.userName = userName;
        this.email = email;
        this.followerCount = followerCount;
        this.isVerified = isVerified;
    }
    greet(){
        console.log("User Account Porpoises: " + this.userName + this.email + this.followerCount + this.isVerified);
    }
}