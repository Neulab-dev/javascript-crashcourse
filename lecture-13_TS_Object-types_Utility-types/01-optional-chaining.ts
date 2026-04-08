interface Animal {
    name: string;
    age: number;
    owner?: {
        name: string;
        contact: string;
        address?: {
            street: string;
            city: string;
        };
    };
}

const obj: Animal = {
    name: "Buddy",
    age: 5,
    owner: {
        name: "Alice",
        contact: "123-456-7890",
        address: {
            city: "",
            street: ""
        }
    }
};

// Ensuring safe access to nested properties without optional chaining
if (obj.owner) {
    if (obj.owner.address) {
        console.log(`Owner's Street: ${obj.owner.address.street}`);
    }
}

// Using optional chaining to safely access nested properties
console.log(`Owner's Street: ${obj.owner?.address?.street ?? 'No address available'}`);

console.log(`Owner's Name: ${obj.owner?.name || 'No owner available'}`);


