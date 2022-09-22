import {hi} from "./modules/functions.js"

document.addEventListener("DOMContentLoaded", function(event) {
    const monthly = document.getElementById("month");
    const yearly = document.getElementById("year");
    const starter = document.getElementById("starter");
    const professional = document.getElementById("professional");
    const company = document.getElementById("company");

    const price = [
        {starter: 19, professional: 54, company: 89},
        {starter: 12, professional: 36, company: 56},
    ]

    const onHandleClick = (elem, id) => {
        if (elem.classList.contains("white_button")){
            monthly.classList.toggle("white_button")
            yearly.classList.toggle("white_button")

            if(id ==="month"){
                starter.textContent = `$${price[0].starter}`;
                professional.textContent = `$${price[0].professional}`;
                company.textContent = `$${price[0].company}`;
            }else {
                starter.textContent = `$${price[1].starter}`;
                professional.textContent = `$${price[1].professional}`;
                company.textContent = `$${price[1].company}`;
            }
        }
        // window.location.reload();
    }

    monthly.addEventListener( "click" , () => onHandleClick(monthly, "month"));
    yearly.addEventListener( "click" , () => onHandleClick(yearly, "year"));
});