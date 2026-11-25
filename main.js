// 1.Задание
// 1.1

const name = "Nursultan";
const age = 19;
const itStudent = true;
const hobbies = ["Футбол", "Программирование", "Музыка"];

console.log(name);
console.log(age);
console.log(itStudent);
console.log(hobbies);

// 1.2

const num1 = 50;
const num2 = 10;

console.log("Сумма", num1 + num2);
console.log("Разность", num1 - num2);
console.log("Произведение", num1 * num2);
console.log("Частное", num1 / num2);

// 1.3 

console.log(name + " is " + age + "years old");

// 2.Задание
// 2.1

if(age < 13) {
    console.log("Ребенок");
} else if (age <= 17) {
    console.log("Подросток");
} else if( age <= 65) {
    console.log("Взрослый");
}else {
    console.log("Пенсионер");
}

// 2.2

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
}
checkEvenOdd(10);
checkEvenOdd(7);
checkEvenOdd(24);

// 2.3

const height = 170;
if (age < 5){
    console.log("Слишком мал");
} else if(age >= 5 && age <= 12) {
    console.log("Добро пожаловать");
} else if (age >= 13 && age <= 18 && height > 160) {
    console.log("Добро пожаловать");
} else {
    console.log("Не разрешено");
}

// 3.Задание
// 3.1

for (let i = 1; i <= 10; i++) {
    console.log("7x" + i + "=" + (7 * i));
}

// 3.2 

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumNumbers(5));

// 3.3 

let i = 20; 
while (i >= 1) {
    console.log(i);
    i--;
}

// 4.Задание
// 4.1

const grades = [5, 4, 3, 5, 2, 4, 5];

let sum = 0;
let max = grades[0];

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
    sum = sum + grades[i];
    if (grades[i] > max) {
        max = grades[i];
    }
}
const average = sum / grades.length;

console.log("Сумма:", sum);
console.log("Средняя оценка:", average);
console.log("Максимальная оценка:", max);

// 4.2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 4.3 

const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

function findCity(arr, city) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === city) {
            return i;
        }
    }
return -1;
}

console.log(findCity(cities, "Ош"));
console.log(findCity(cities, "Бишкек"));
console.log(findCity(cities, "Москва"));

// 5.Задание
// 5.1

const student = {
    name: "Нурсултан",
    age: 19,
    courses: ["HTML", "CSS", "JavaScript"],
    isActive: true
};

console.log(student);

student.age = student.age + 1;

console.log("Новый возраст:", student.age);

for (let i = 0; i < student.courses.length; i++) {
    console.log(student.courses[i]);
}

// 5.2

const product = {
    name: "Телефон",
    price: 20000,
    quantity: 2
};

function getTotalCost(product) {
    const total = product.price * product.quantity;

    console.log("Общая стоимость:", total);
}

getTotalCost(product);

// 5.3

const books = [
    {
        title: "Книга 1",
        author: "Автор 1",
        year: 2000
    },
    {
        title: "Книга 2",
        author: "Автор 2",
        year: 1995
    },
    {
        title: "Книга 3",
        author: "Автор 3",
        year: 2010
    }
    ];

let oldestBook = books[0];

for (let i = 0; i < books.length; i++) {
    console.log(books[i]);

    if (books[i].year < oldestBook.year) {
    oldestBook = books[i];
    }
}
console.log("Самая старая книга:", oldestBook);

// 6.Задание
// 6.1

const calculateDiscount = (price, discount) => {
    return price - (price * discount / 100);
};

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(2000, 20));
console.log(calculateDiscount(500, 5));

// 6.2

function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 40) {
        return "C";
    } else if (score >= 0) {
        return "F";
    }
}

console.log(getGrade(90));
console.log(getGrade(70));
console.log(getGrade(50));
console.log(getGrade(30));

// 6.3

function getMaxNumber(arr) {
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

console.log(getMaxNumber([10, 20, 5, 30]));
console.log(getMaxNumber([100, 50, 200, 150]));
console.log(getMaxNumber([7, 3, 9, 1]));