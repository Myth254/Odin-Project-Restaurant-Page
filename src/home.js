const openHours = {
    day1: "Monday: 8am - 7pm",
    day2: "Tuesday: 8am - 7pm",
    day3: "Wednesday: 8am - 7pm",
    day4: "Thursday: 6am - 7pm",
    day5: "Friday: 6am - 10pm",
    day6: "Saturday: 8am - 10pm",
}

export function renderHomePage() {
    const home = document.createElement('div')
    const restaurantHeading = document.createElement('h1')

    const introSection = document.createElement('div')
    introSection.classList.add('intro-section')
    const introText = document.createElement('p')

    const hoursSection = document.createElement('div')
    hoursSection.classList.add('hours-section')
    const hoursHeading = document.createElement('h2')
    const hoursList = document.createElement('ul')

    const locationSection = document.createElement('div')
    locationSection.classList.add('location-section')
    const locationHeading = document.createElement('h2')
    const locationDetails = document.createElement('p')

    restaurantHeading.textContent = "Welcome To Dishi Restaurant"

    introText.textContent = `
        Welcome to Kenya's ultimate culinary home, where rich tribal traditions and vibrant modern flavors meet on your plate.
        Our kitchen celebrates the heart and soul of authentic Kenyan hospitality—true Karibu spirit. We bring the bustling
        energy of Nairobi and the coastal warmth of Mombasa straight to your table. Savor our perfectly charred nyama choma,
        fluffy chapati, and rich, slow-simmered stews. Every dish pairs beautifully with our fresh, signature kachumbari.
        We use traditional techniques and locally sourced ingredients to honor our heritage. Step inside, join our circle, 
        and experience the comforting, unmistakable taste of home.
    `
    introSection.appendChild(introText)

    hoursHeading.textContent = "Hours"
    for (let key in openHours) {
        const hours = document.createElement('li')
        hours.textContent = `${openHours[key]}`
        hoursList.appendChild(hours)
    }
    hoursSection.append(hoursHeading, hoursList)

    locationHeading.textContent = "Our location"
    locationDetails.textContent = "123 Town Drive, Ngoingwa, Thika"
    locationSection.append(locationHeading, locationDetails)

    home.append(restaurantHeading, introSection, hoursSection, locationSection)
    return home
}