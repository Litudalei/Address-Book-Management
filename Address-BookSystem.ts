
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

    constructor() {
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");
        console.log("Welcome to Address Book Program");
        console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");
    }

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

const contact1 = new Contact(
    "Rishi",
    "Babu",
    "123 Potheri",
    "Chennai",
    "Tamil Nadu",
    "L1 1AB",
    "07123456789",
    "rishi.babu@gmail.com"
);

myAddressBook.addContact(contact1);
myAddressBook.displayContacts();