import * as yup from "yup";


const PHONE_REGEX = /^((\+38))?([ ])?((\(\d{3}\))|(\d{3}))?([ ])?(\d{3}[- ]?\d{2}[- ]?\d{2})$/;
const REQUIRED_FIELD = 'This field is required!';

const schema = yup.object().shape({
    name: yup.string().required(REQUIRED_FIELD).min(3, 'This field must contain at least 3 letters'),
    surname: yup.string().required(REQUIRED_FIELD),
    age: yup.number().typeError('Age must be a number').required(REQUIRED_FIELD)
        .integer('You must enter the number of full years ')
        .min(16, "You haven't enough age to make this purchase").max(120, 'Incorrect value!'),
    address: yup.string().required(REQUIRED_FIELD),
    phone: yup.string().required(REQUIRED_FIELD).matches(PHONE_REGEX, 'Phone number is not valid')
});

export default schema;