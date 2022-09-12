import { getBusinesses } from "./database.js";

document
    .querySelector("#content")
    .addEventListener(
        "keypress",
        (keyPressEvent) => {
            const companySearchResultArticle = document.querySelector(".foundBusinesses")

            if (keyPressEvent.charCode === 13) {
                /*
                    When the user presses 'Enter', find the matching business.
                

                    You can use the `.includes()` string method to
                    see if a smaller string is part of a larger string.

                    Example:
                        if (business.companyName.includes(keyPressEvent.target.value)) {

                        }
                */

                const foundAgent = businesses.find(business => {
                    return (business.purchasingAgent.nameFirst.toLowerCase().includes(document.getElementById("companySearch").value.toLowerCase()) ||
                        business.purchasingAgent.nameLast.toLowerCase().includes(document.getElementById("companySearch").value.toLowerCase()))
                }
                )

                companySearchResultArticle.innerHTML = `<h2>${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}</h2>
                <p>${foundAgent.companyName}</p>
                <p>${foundAgent.phoneWork}</p>`
            }
        });

const businesses = getBusinesses()

//export function to generate list of businesses in html.
export const businessList = () => {
    //define a variable with opening html.
    let html = "<div>"
    //use the forEach method to generate html for each business and append html string.
    businesses.forEach(business => {
        html += `<div id="business--${business.id}">
            <h2>${business.companyName}</h2>
            <p>${business.addressFullStreet}</p>
            <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
        </div>`
    });
    //append string with closing html
    html += "</div>"
    //return string
    return html
}