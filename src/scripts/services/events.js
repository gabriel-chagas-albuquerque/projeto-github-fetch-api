import { baseUrl, eventsQuantify} from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantify}`)
    const events = await response.json()
    return events.filter(element => element.type === 'CreateEvent' || element.type === 'PushEvent').slice(0,eventsQuantify)
}

export {getEvents}