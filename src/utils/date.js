const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default currentDate;

//This js file is for date and time which gets it from the browser
//Date is a special function/Constructor
//toLocaleString converts numbers into a string
