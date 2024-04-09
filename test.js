users = [
    {
        name: 'Pablo',
        age: 22,
        series: ['Entrevias','Casados con hijos']
    },
    {
        name: 'Juan',
        age: 40,
        series: ['Diosito','ABC']
    }
]

users.forEach((user) => {
    user.age++, user.series.push('ASD')
});

for (const user of users) {
    user.age++, user.series.push('xd')
} 

console.log(users)