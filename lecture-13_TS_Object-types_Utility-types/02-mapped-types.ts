type MappedType = {
    [key: string]: number;
};

enum Status {
    Active,
    Inactive = "inactive",
    Pending = "pending",
    Completed = "completed"
}

type stringUnion = "active" | "inactive" | "pending";

type StatusMap = {
    [key in Status]: string;
};

type StringUnionMap = {
    [key in stringUnion]: string;
};

const stringUnionDescriptions: StringUnionMap = {
    active: "The item is active.",
    inactive: "The item is inactive.",
    pending: "The item is pending."
};

const statusDescriptions: StatusMap = {
    [Status.Active]: "The item is active.",
    [Status.Inactive]: "The item is inactive.",
    [Status.Pending]: "The item is pending.",
    [Status.Completed]: "The item is completed."
};

console.log(statusDescriptions.inactive);
console.log(statusDescriptions[0]);

type ReadonlyIndexType = {
    readonly [key: string]: number;
};

type OptionalIndexType = {
    [key in string]+?: number;
}

type RequiredIndexType = {
    [key in string]-?: number;
}


// --------------------------------

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Person = {
    name: string;
    age: string;
    email: string;
    id: number;
};
type AgeType = Person["age"];

type person = (Person[])[number];

type PersonOptions = OptionsFlags<Person>;