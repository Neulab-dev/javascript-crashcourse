type Person = {
    name: string;
    age: number;
    email: string;
};

const key = "age";

//@ts-expect-error
type Age = Person[key];
type AgeValid = Person[typeof key];

type Age2 = Person["email"];