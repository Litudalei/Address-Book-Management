"use strict";
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
    constructor() {
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");
        console.log("Welcome to Address Book Program");
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");
    }
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
const contact1 = new Contact("Rishi", "Babu", "123 Potheri", "Chennai", "Tamil Nadu", "L1 1AB", "07123456789", "rishi.babu@gmail.com");
myAddressBook.addContact(contact1);
myAddressBook.displayContacts();
