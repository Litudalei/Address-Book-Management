import PromptSync from 'prompt-sync';
const prompt = PromptSync();
console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");
console.log("Welcome to Address Book Program");
console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");
class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    toString() {
        return `Name: ${this.firstName} ${this.lastName} | Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip} | Phone: ${this.phoneNumber} | Email: ${this.email}`;
    }
}
class AddressBookMain {
    contacts = [];
    addContact(contact) {
        this.contacts.push(contact);
        console.log(`Contact added successfully: ${contact.firstName} ${contact.lastName}`);
    }
    displayContacts() {
        console.log("\n--- Address Book Contacts ---");
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        }
        else {
            this.contacts.forEach((contact, index) => {
                console.log(`${index + 1}. ${contact.toString()}`);
            });
        }
    }
}
const myAddressBook = new AddressBookMain();
while (true) {
    console.log("Select the Option \n");
    console.log("1. Create User");
    console.log("2. Display Users");
    console.log("3. Close the application");
    let optionNumber = Number(prompt("Enter option number : "));
    if (optionNumber == 1) {
        let firstName = prompt("Enter yout first name : ");
        let lastName = prompt("Enter your last name : ");
        let address = prompt("Enter your address : ");
        let city = prompt("Enter your city : ");
        let state = prompt("Enter your state : ");
        let zip = prompt("Enter your zip code : ");
        let phoneNumber = prompt("Enter your phone number : ");
        let emailId = prompt("Enter your mail id : ");
        const contact1 = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, emailId);
        myAddressBook.addContact(contact1);
    }
    else if (optionNumber == 2) {
        myAddressBook.displayContacts();
    }
    else {
        console.log("Thank you");
        break;
    }
}
