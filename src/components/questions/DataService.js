//get data from https://lxpi9qne2a.api.quickmocker.com/getReactFAQs
import axios from "axios";


const dataURL = 'https://lxpi9qne2a.api.quickmocker.com/getReactFAQs';

const getQuestions = ()=>{
    return axios.get(dataURL)
    .then( ({data}) => {
        console.log(data);
        return data.response;
    })
     .catch(err=>{
        console.error(err)
    });
}

export {getQuestions}