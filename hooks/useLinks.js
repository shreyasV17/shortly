// import { useState, useEffect } from 'react';
// import shortcode from '../pages/api/shortcode';

// const useLinks = (defaultTerm) => {
//     const [links, setLinks] = useState([]);

//     useEffect(() => {
//         shorten(defaultTerm);
//     }, [defaultTerm]);

//     const shorten = async term => {
//         const response = await shortcode.get('/shorten', {
//             url: 'https://www.google.com/'
//         });
//         setLinks(response.result.full_short_link);
//     };

//     return [links, shorten];
// };

// export default useLinks;