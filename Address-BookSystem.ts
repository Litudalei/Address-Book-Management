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

    public editContact(): void {
        console.log("\n --- Edit Info page --- \n");
        console.log(" --- Enter first and last name --- \n");

        if (this.contacts.length > 0) {
            this.contacts.forEach((contact, index) => {
                console.log(`${index + 1}. ${contact.toString()}`);
            });

            let firstName = prompt("Enter the first name : ");
            let lastName = prompt("Enter the last name : ");

            this.contacts.forEach((contact, index) => {
                if (contact.firstName == firstName && contact.lastName == lastName) {
                    console.log("\n --- Which data you have to edit --- \n");
                    console.log("1. First Name");
                    console.log("2. Last Name");
                    console.log("3. Address");
                    console.log("4. City");
                    console.log("5. State");
                    console.log("6. Zip");
                    console.log("7. Phone Number");
                    console.log("8. Email Id");
                    console.log("9. Exit");
                    
                    let optionNumber = Number(prompt("Enter the edit option number : "));

                    while (true) {
                        if (optionNumber > 0 && optionNumber < 9) {
                            switch(optionNumber){
                                case(1) :
                                    console.log(`First Name is getting edited for ${contact.firstName} ${contact.lastName}\n`);
                                    contact.firstName = prompt("Enter First Name : ");
                                    console.log("\n --- First name is edited --- ");
                                    break;

                                case(2) :
                                    console.log(`Last Name is getting edited for ${contact.firstName} ${contact.lastName}\n`);
                                    contact.lastName = prompt("Enter Last Name : ");
                                    console.log("\n --- Last name is edited --- ");
                                    break;

                                case(3) :
                                    console.log(`Address is getting edited for ${contact.firstName} ${contact.lastName}\n`);
                                    contact.address = prompt("Enter Address : ");
                                    console.log("\n --- Address is edited --- ");
                                    break;

                                case(4) :
                                    console.log(`City is getting edited for ${contact.firstName} ${contact.lastName}\n`);
                                    contact.city = prompt("Enter city : ");
                                    console.log("\n --- city is edited --- ");
                                    break;

                                case(5) :
                                    console.log(`State is getting edited for ${contact.firstName} ${contact.lastName}\n`);
                                    contact.state = prompt("Enter State : ");
                                    console.log("\n --- State is edited --- ");
                                    break;

                                case(6) :
                                    console.log(`Zip code is getting edited for ${contact.firstName} ${contact.lastName}\n`);
                                    contact.zip = prompt("Enter Zip code : ");
                                    console.log("\n --- Zip code is edited --- ");
                                    break;
                                
                                case(7) :
                                    console.log(`Phone Number is getting edited for ${contact.firstName} ${contact.lastName}\n`);
                                    contact.phoneNumber = prompt("Enter Phone Number : ");
                                    console.log("\n --- Phone Number is edited --- ");
                                    break;
                                
                                case(8) :
                                    console.log(`Email Id is getting edited for ${contact.firstName} ${contact.lastName}\n`);
                                    contact.email = prompt("Enter Email Id : ");
                                    console.log("\n --- Email Id is edited --- ");
                                    break;

                                case(9) :
                                    console.log("Nothing to change");
                                    break;

                                default:
                                    console.log("Enter valid option number");
                                    break;
                            }
                            break;
                        } else if (optionNumber == 9) {
                            console.log("Thank you");
                            break;
                        } else {
                            console.log("Enter a valid option");
                        }
                    }
                } else {
                    console.log("Name is not found to edit");
                    return;
                }
            });
        }
    }

    public deleteContacts(): void {
        console.log("\n --- Delete Record --- \n");
        if (this.contacts.length > 0) {
            this.contacts.forEach((contact, index) => {
                console.log(`${index + 1}. ${contact.toString()}`);
            });

            let firstName = prompt("Enter the first name : ");
            let lastName = prompt("Enter the last name : ");

            this.contacts.forEach((contact, index) => {
                if (contact.firstName == firstName && contact.lastName == lastName) {
                    this.contacts.splice(index, 1);
                    console.log(`Details of ${firstName} ${lastName} id deleted successfully`);
                } else {
                    console.log("Name is not found to delete");
                    return;
                }
            })
        } else {
            console.log("No Records to delete");
        }
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
    console.log("2. Edit Users");
    console.log("3. Delete User");
    console.log("4. Display User");
    console.log("5. Close the application");
    let optionNumber: number = Number(prompt("Enter option number : "));
    if (optionNumber == 1) {
        while (true) {
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

            console.log("---Record created successfully---\n");
            console.log("1. Create one more");
            console.log("2. Exit creating");

            let createOption = Number(prompt("Enter the option number : "));
            if (createOption == 2) {
                break;
            } else if (createOption > 2) {
                console.log("Enter valid option number");
            }
        }

    } else if (optionNumber == 2) {
        myAddressBook.editContact();
    } else if (optionNumber == 3) {
        myAddressBook.deleteContacts();
    } else if (optionNumber == 4) {
        myAddressBook.displayContacts();
    } else if (optionNumber == 5){
        console.log("Thank you");
        break;
    } else {
        console.log("Enter a valid option \n");
    }
}