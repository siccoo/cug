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
    if(!values.email && !/\S+@\S+\.\S+/.test(values.email) ) {
        errors.email = "Invalid e-mail address"
    } 

    // PHONE NUMBER FIELD VALIDATION
    if(!values.phoneNumber || values.phoneNumber.length <= 10 || values.phoneNumber.length > 10 ) {
        // errors.phoneNumber = "Enter a valid phone number, Maximum 11 digits"
    } 

    // POLICE STAFF ID FIELD VALIDATION
    if(!values.staffId) {
        errors.staffId = "Police Staff ID required"
    } else if(values.staffId <= 5) {
        errors.staffId = "Police Staff ID Max. 6 Characters"
    }

    return errors;
}