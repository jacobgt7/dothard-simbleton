import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

//Export a function that filters list of companies and generates
//New York companies in html.
export const NewYorkBusinesses = () => {
    //filter businesses array for state code NY and store new array in a variable.
    const NYBusinesses = businesses.filter(business => business.addressStateCode === "NY")
    //define a variable with opening html.
    let html = "<div>"
    //use the forEach method to generate html for each business and append html string.
    NYBusinesses.forEach(business => {
        html += `<div id="NewYorkBusiness--${business.id}">
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
