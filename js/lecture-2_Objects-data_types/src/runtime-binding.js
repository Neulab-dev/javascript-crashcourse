// 7. call() - invoke function with specific this
function introduce(greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
}
introduce.call({ name: 'David' }, 'Hello');

// 8. apply() - like call but args as array
introduce.apply({ name: 'Eve' }, ['Hi']);

// 9. bind() - creates new function with fixed this
const boundIntroduce = introduce.bind({ name: 'Frank' });
boundIntroduce('Hey');
