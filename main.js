let car = {
    make: "Ford",
    model: "Mustang",
    year: "2015",
    color: "red"
};

let animals = [
    "Kippers", 
    "Jack", 
    "Gypsy", 
    "Angus", 
    "Seymour Bouts", 
    "Sharky"
];

let keith = {
    name: "Keith",
    relation: "Son",
    age: 17
};

let susan = {
    name: "Susan",
    relation: "Mother",
    age: 52
};

let jack = {
    name: "Jack",
    relation: "Father",
    age: 57
};

let kelly = {
    name: "Kelly",
    relation: "Daughter",
    age: 21
};

let familyMembers = [
    keith,
    susan,
    jack,
    kelly
]

console.log(car);

console.log(animals);

console.log(familyMembers);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength);

let place = "address";
let date = "constructionDate";
let price = "cost";
let bigMan = "owner";
let nerds = "architect"

console.log(empireStateBuilding[place], empireStateBuilding[date], empireStateBuilding[price], empireStateBuilding[bigMan], empireStateBuilding[nerds]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;

// for (let i=0; i < fullTimeInstructors.length; i++) {
//     console.log(fullTimeInstructors[i]);
// };

// const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime;

// for (let i=0; i < partTimeInstructors.length; i++) {
//     console.log(partTimeInstructors[i]);
// };

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);

console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
};

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)
