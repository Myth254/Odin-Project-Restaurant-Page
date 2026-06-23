const contacts = {
    Manager: {
        name: "John Kula",
        position: "Manager",
        phoneNumber: "0798745621",
        email: "johnkula@dishi.co.ke",
    },

    Chef: {
        name: "Mary Shiba",
        position: "Chef",
        phoneNumber: "0723487687",
        email: "maryshiba@dishi.co.ke",
    },

    HeadWaiter : {
        name: "Cathy Pewa",
        position: "Head waiter",
        phoneNumber: "0111222095",
        email: "cathypewa@dishi.co.ke",
    },
}

export function renderContactPage() {
    const contactContainer = document.createElement('div')
    const contactHeading = document.createElement('h1')
    contactHeading.textContent = "Contact Us"
    contactContainer.append(contactHeading)

    for (let key in contacts) {
        const contactdiv = document.createElement('div')

        const contactName = document.createElement('p')
        contactName.textContent = contacts[key].name

        const contactPosition = document.createElement('p')
        contactPosition.textContent = contacts[key].position

        const contactPhone = document.createElement('p')
        contactPhone.textContent = contacts[key].phoneNumber

        const contactEmail = document.createElement('p')
        contactEmail.textContent = contacts[key].email

        contactdiv.append(contactName, contactPosition, contactPhone, contactEmail)
        contactContainer.appendChild(contactdiv)
    }
    return contactContainer
}