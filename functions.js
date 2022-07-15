const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

pressGrindBeans();

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}

console.log(factorial(33));

let orderCount = 0;

const takeOrder = (topping, orderCount) => {
    console.log(`Pizza with ${topping}`);
    orderCount++;
    console.log(orderCount);
}

takeOrder("pineapple", orderCount);
takeOrder("pineapple", orderCount);

const pinNumber = 1234;
const balance = 100;

const cashMachine = function (attemptedPin, moneyToWithdraw) {
    console.log(balance);
    if (attemptedPin === pinNumber) {
        if (moneyToWithdraw <= balance) {
            return (`You have deposited £${moneyToWithdraw}`);
        } else{
            return (`Insufficient funds`);
        }
    } else {
        return (`${attemptedPin} was not recognised`);
    }
}

console.log(cashMachine(123, 110));

const alarmObject = {
    weekdayAlarm : "No alarm needed",
    weekendAlarm : "Get up, it's 7am"

}

const day = "";
const alarm = "";

if (day === "Saturday" || day === "Sunday") {
    alarm = alarmObject.weekendAlarm;
} else {
    alarm = alarmObject.weekdayAlarm;
}