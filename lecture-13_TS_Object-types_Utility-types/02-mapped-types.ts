type MappedType = {
    [key: string]: number;
};

enum Status {
    Active,
    Inactive = "inactive",
    Pending = "pending"
}

type StatusMap = {
    [key in Status]: string;
};

const statusDescriptions: StatusMap = {
    [Status.Active]: "The item is active.",
    [Status.Inactive]: "The item is inactive.",
    [Status.Pending]: "The item is pending."
};

console.log(statusDescriptions.inactive);
console.log(statusDescriptions[0]);

type ReadonlyIndexType = {
    readonly [key: string]: number;
};

type OptionalIndexType = {
    [key in string]?: number;
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
    age: number;
    email: string;
};

type PersonOptions = OptionsFlags<Person>;