export default function validateInfo(values) {
    let errors = {}

    // FIRST NAME FIELD VALIDATION
    if(!values.firstName.trim()) {
        errors.firstName = "First name required"
    }

    // LAST NAME FIELD VALIDATION
    if(!values.lastName.trim()) {
        errors.lastName = "Last name required"
    }

    // EMAIL FIELD VALIDATION
    if(!values.email) {
        errors.email = "Email required"
    } else if(/$|.+@.+..+/.test(values.email)) {
        errors.email = "Invalid e-mail address"
    }

    // PHONE NUMBER FIELD VALIDATION
    if(!values.phoneNumber) {
        errors.phoneNumber = "Phone number required"
    } else if(values.phoneNumber.length <= 11) {
        errors.phoneNumber = "Enter a valid phone number, Maximum 11 digits"
    }

    // POLICE STAFF ID FIELD VALIDATION
    if(!values.staffId) {
        errors.staffId = "Police Staff ID required"
    } else if(values.staffId < 6) {
        errors.staffId = "Police Staff ID Max. 6 Characters"
    }

    return errors;
}