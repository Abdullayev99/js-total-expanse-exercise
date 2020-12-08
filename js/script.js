var totalAmount = prompt('Alisher bratish qancha dengi bor senda?');
var ticket = 500;
var hotelPayment = 250;
var entertainment = 120;
var USD = 9433.34;
var EURO = 10354.03;
var ticketInSum = ticket * USD;
var hotelPaymentInSum = hotelPayment * USD;
var entertainmentInSum = entertainment * EURO;
var totalExpanse = ticketInSum + hotelPaymentInSum + entertainmentInSum;


console.log(`Bilet narhi ${ticketInSum} boladi. Mehmonhona narhi ${hotelPaymentInSum} boladi. Kongil ochar va muzey uchun ${entertainmentInSum} boladi. Umumiy summa ${totalExpanse}`);