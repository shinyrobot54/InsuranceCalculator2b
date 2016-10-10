/** @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *  @version 0.0.1
 *  @summary Calculates insurance pricing (project 2)
 *  @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueYesNo;
let policyNum, birthday, birthMonth, birthYear, premiumDueDateDay, premiumDueDateMonth, premiumDueDateYear, accidents, age, agePrice, accidentPrice, premium;
let lastName, firstName;
const MAXNUMOFACCIDENTS = 5;

function main() {
    process.stdout.write('\x1Bc'); //clear screen
    if (continueYesNo == null) {
        setContinueYesNo();
    }
    if (continueYesNo === 1) {
        setPolicyNum();
        setFirstName();
        setLastName();
        setBirthMonth();
        setBirthday();
        setBirthYear();
        setPremiumDueDateDay();
        setPremiumDueDateMonth();
        setPremiumDueDateYear();
        setAccidents();
        setAge();
        setAgePrice();
        setAccidentsPrice();
        setPremium();
        printInfo();
        setContinueYesNo();
        return main();
        }

    printBye();
}

main();

function setContinueYesNo() {
    const YES = 1, NO = 0;
    if (continueYesNo === YES){
        continueYesNo = Number(PROMPT.question('\n Would you like to continue? [Yes = 1 No = 0] \n '));
        if (continueYesNo != YES && continueYesNo != NO){
            console.log('\n you have entered an invalid response, please try again.');
            return setContinueYesNo();
        }
    } else {
        continueYesNo = YES
    }
}

function setPolicyNum () {
    const MAXPOLICYNUM = 1000;
    policyNum = Math.floor((Math.random() * MAXPOLICYNUM) + 1);
}

function setFirstName() {
    firstName = PROMPT.question('\n Please enter your first name \n');
}
function setLastName() {
    lastName = PROMPT.question('\n Please enter your last name \n');
}

function setBirthday() {
    const FIRSTOFTHEMONTH = 1, LASTOFMONTH = 31;
    birthday = PROMPT.question('\n Please enter your birthday [dd]. \n');
    if (birthday > LASTOFMONTH || birthday < FIRSTOFTHEMONTH){
        console.log('\n You have entered an invalid birth day, please try again.');
        return setBirthday()
    }
}

function setBirthMonth() {
    const DECEMBER = 12, JANUARY = 1;
    birthMonth = PROMPT.question(`\n please enter your birth month [mm]. \n`);
    if (birthMonth >  DECEMBER || birthMonth < JANUARY){
        console.log('\n You have entered an invalid birth month, please try again.');
        return setBirthMonth();
    }
}
function setBirthYear() {
    const HIGHESTBIRTHYEAR = 2000, LOWESTBIRTHYEAR = 1900;
    birthYear = PROMPT.question('\n Please enter your birth year [yyyy] \n');
    if (birthYear > HIGHESTBIRTHYEAR || birthYear < LOWESTBIRTHYEAR) {
        console.log('\n You have entered an invalid birth year.');
        return setBirthYear();
    }
}

function setPremiumDueDateDay() {
    const MINDAY = 1, MAXDAY = 31;
    premiumDueDateDay = PROMPT.question('\n Please enter you premium due date day [dd] \n');
    if (premiumDueDateDay < MINDAY || premiumDueDateDay > MAXDAY){
        console.log('\n You have entered an invalid premium due date day.');
        return setPremiumDueDateDay();
    }
}

function setPremiumDueDateMonth() {
    const MINMONTH = 1, MAXMONTH = 12;
    premiumDueDateMonth = PROMPT.question('\n Please enter your premium due date month [mm] \n');
    if (premiumDueDateMonth < MINMONTH || premiumDueDateMonth > MAXMONTH){
        console.log('\n You have entered an invalid premium due date month.');
        return setPremiumDueDateMonth();
    }
}

function setPremiumDueDateYear() {
    const MINYEAR = 2017;
    premiumDueDateYear = PROMPT.question('\n Please enter your premium due date year [yyyy] \n');
    if (premiumDueDateYear < MINYEAR){
        console.log('\n You have entered an invalid premium due date year.');
        return setPremiumDueDateYear();
    }
}
function setAccidents() {
    const MAXNUMOFACCIDENTS = 5, MINNUMOFACCIDENTS = 0;
    accidents = PROMPT.question('\n Please enter the number of driving accidents you have had in the last three years \n');
    if (accidents > MAXNUMOFACCIDENTS || accidents < MINNUMOFACCIDENTS){
        console.log('\n You have entered an invalid number, please try again.');
    }
}

function setAge () {
    const CURRENTYEAR = 2016;
    age = Number(CURRENTYEAR - birthYear);
}

function setAgePrice() {
    const BASEPRICE = 100, SIXTEENTOTWENTYNINE = 20, THIRTYTOFOURTYFOUR = 10, SIXTYANDUP = 30,
     AGEFIFTEEN = 15, AGETHIRTY = 30, AGEFOURTYFIVE = 45, AGESIXTY = 60;
    if (age > AGEFIFTEEN && age < AGETHIRTY){
        agePrice = Number(BASEPRICE + SIXTEENTOTWENTYNINE);
    }
    else if (age >= AGETHIRTY && age < AGEFOURTYFIVE){
        agePrice = Number(BASEPRICE + THIRTYTOFOURTYFOUR);
    }
    else if (age >= AGESIXTY){
        agePrice = Number(BASEPRICE + SIXTYANDUP);
    }
}

function setAccidentsPrice() {
    const PRICEPERACCIDENT = 50;
    accidentPrice = Number(accidents * PRICEPERACCIDENT);
}

function setPremium(){
    premium = Number(agePrice + accidentPrice);
}

function printInfo() {
    console.log('\n Hi ' + firstName + ' ' + lastName + '!');
    console.log(' Policy Number: ' + policyNum);
    console.log(' Premium: ' + premium);
    console.log(' Premium due date: ' + premiumDueDateMonth + '/' + premiumDueDateDay + '/' + premiumDueDateYear);
    console.log(' Birthdate: ' + birthMonth + '/' + birthday + '/' + birthYear);
}

function printBye() {
    console.log('\n Have a good day!')
}