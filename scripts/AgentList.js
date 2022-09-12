import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

//Export a function which maps a new array of purchasing agents
//and represents them in html.
export const agentList = () => {
    //.map businesses for the .purchasingAgent property and store in a variable.
    const agents = businesses.map(business => ({ nameFirst: business.purchasingAgent.nameFirst, nameLast: business.purchasingAgent.nameLast, phoneWork: business.phoneWork, companyName: business.companyName }))
    //create a variable containing opening html.
    let html = `<div>`
    //use for each on agents array to generate html and append to string.
    agents.forEach(agent => {
        html += `<div class="agent">
            <h3>${agent.nameFirst} ${agent.nameLast}</h3>
            <h4>${agent.companyName}</h4>
            <h4>${agent.phoneWork}</h4>
            </div>`
    })
    //append html with closing tags.
    html += "</div>"
    //return html string.
    return html
}