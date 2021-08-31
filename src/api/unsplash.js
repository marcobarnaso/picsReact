import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID 8yvwA-D-6m_5YR1BIQWNKi6N96rfrwINFtrphnDRoYM' }
});