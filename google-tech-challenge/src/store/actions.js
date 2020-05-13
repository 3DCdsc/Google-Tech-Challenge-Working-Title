import axios from 'axios';
import{
    SEND_FORM_SUCCESS,
    SEND_FORM_FAILURE,
} from './types';
const GOOGLE_FORM_NAME_ID = 'entry.718128050'
const GOOGLE_FORM_EMAIL_ID = 'entry.1948029242'
const GOOGLE_FORM_PHONE_ID = 'entry.2133622211'
const GOOGLE_FORM_GETOUT_ID = 'entry.2019019449'
const GOOGLE_FORM_IDEAS_ID = 'entry.1840681895'
const GOOGLE_FORM_SINGLE_GROUP_ID = 'entry.1057332855'
const GOOGLE_FORM_RESPONSE_MIXED_ID = 'entry.1000627848'
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfF91Q29h-8qOqovBNTTN5ThrWG6wEqlVDP2FUy6YjPr8xdVw/formResponse';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

export const postFormData = (name,email,phone,getOut,ideas,singleGroup,responseMixed) => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_NAME_ID,name);
    formData.append(GOOGLE_FORM_EMAIL_ID,email);
    formData.append(GOOGLE_FORM_PHONE_ID,phone);
    formData.append(GOOGLE_FORM_GETOUT_ID,getOut);
    formData.append(GOOGLE_FORM_IDEAS_ID,ideas);
    formData.append(GOOGLE_FORM_SINGLE_GROUP_ID,singleGroup);
    formData.append(GOOGLE_FORM_RESPONSE_MIXED_ID,responseMixed);
    console.log(formData);
    return async(dispatch) =>{
    axios.post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
        .then((res) => {
            console.log(res);
        //dispatch(sendFormSuccess(res))
  }).catch((error) => {
      console.log(error);
      //dispatch(sendFormFailure(error));
  })
    }

}

const sendFormSuccess = (res) => ({
    type: SEND_FORM_SUCCESS,
    payload:{
        ...res,
    }
})

const sendFormFailure = (error) => ({
    type: SEND_FORM_FAILURE,
    payload:{
        error
    }
})