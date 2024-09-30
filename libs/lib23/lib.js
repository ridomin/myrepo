import axios from 'axios'

const my_name = 'rido23'

axios
    .get('https://www.google.com')
    .then( r => console.log(r.headers))

export {my_name}