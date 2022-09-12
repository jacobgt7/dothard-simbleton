import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

//Export a function that filters for manufacturing companies
//and represents them in html.
export const manufacturingBusinesses = () => {
    //Filter for companies with industry "Manufacturing" and 
    //store new array in a variable.
    const manufacturers = businesses.filter(business => business.companyIndustry === "Manufacturing")
    //define a variable with opening html.
    let html = "<div>"
    //use the forEach method to generate html for each business and append html string.
    manufacturers.forEach(business => {
        html += `<div id="manufacturer--${business.id}">
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