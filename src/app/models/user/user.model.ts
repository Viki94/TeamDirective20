export class User {
    username:string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    password: string;
    confirmPassword: string;

    constructor(
        username:string,
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: string,
        password: string,
        confirmPassword: string
    ) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.password = password,
        this.confirmPassword = confirmPassword
    }
};
