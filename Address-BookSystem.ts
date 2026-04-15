import PromptSync from 'prompt-sync';

const prompt = PromptSync();

console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");
console.log("Welcome to Address Book Program");
console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");

interface UserDetails {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email: string;
}

class Contact implements UserDetails {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public city: string,
        public state: string,
        public zip: string,
        public phoneNumber: string,
        public email: string
    ) {}

    toString(): string {
        return `Name: ${this.firstName} ${this.lastName} | Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip} | Phone: ${this.phoneNumber} | Email: ${this.email}`;
    }
}

class AddressBookMain {
    private contacts: Contact[] = [];

    public addContact(contact: Contact): void {
        this.contacts.push(contact);
        console.log(`Contact added successfully: ${contact.firstName} ${contact.lastName}`);
    }

    public displayContacts(): void {
        console.log("\n--- Address Book Contacts ---");
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        } else {
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
    let optionNumber: number = Number(prompt("Enter option number : "));
    if (optionNumber == 1) {

        let firstName: string = prompt("Enter yout first name : ");
        let lastName: string = prompt("Enter your last name : ");
        let address: string = prompt("Enter your address : ");
        let city: string = prompt("Enter your city : ");
        let state: string = prompt("Enter your state : ");
        let zip: string = prompt("Enter your zip code : ");
        let phoneNumber: string = prompt("Enter your phone number : ");
        let emailId: string = prompt("Enter your mail id : ");

        const contact1 = new Contact(
            firstName,
            lastName,
            address,
            city,
            state,
            zip,
            phoneNumber,
            emailId
        );

        myAddressBook.addContact(contact1);

    } else if (optionNumber == 2) {
        myAddressBook.displayContacts();
    } else {
        console.log("Thank you");
        break;
    }
}