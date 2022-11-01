// TODO: Get the form submission as an object
// TODO: Write a function to calculate the total amount
// TODO: Output the information showing voff, the tip amount and the total in 'p' tags

const form = document.querySelector("form");
const tipAmtP = document.querySelector("#tip-amt");
const totalAmtP = document.querySelector("#total-amt");

function calcTotalWithTip(total, tipPct) {
  return Number(total) + total * (tipPct / 100);
}

function handleSubmit(e) {
  e.preventDefault();

  const submission = {
    total: e.target.total.value,
    tip: e.target.tip.value,
  };

  calcTotalWithTip(submission.total, submission.tip);
  //  TODO: FINISH CODE, ON SLACK
}

form.addEventListener("submit", handleSubmit);
