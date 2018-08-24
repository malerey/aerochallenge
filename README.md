## Aero Coding Challenge

The server is coded in Restler, Node.js and Express.

The frontend is coded in React and vanilla CSS.

You must download all archives and run the following commands in both the server dir and the client dir:

### `npm install`

### `npm start`

The server runs in port 3001 and the frontend in port 3000.  

(Note: The version running in Now doesn't have node, and all the requests are made from the frontend. I uploaded it this way so it could be easily deployable, but the redeeming products doesn't work ('No 'Access-Control-Allow-Origin' header is present on the requested resource') 

To-dos: 
- Add responsive design
- Points should update after redeeming a product
- Fix pagination issues (user can go to page -1 or 3)
- When user clics "Highest price" or "Lowest price" while on page 2, page 1 should be displayed 
- Fix points display when the user has more than 9999
 


