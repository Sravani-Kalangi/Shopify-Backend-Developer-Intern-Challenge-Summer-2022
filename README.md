# Shopify-Backend-Developer-Intern-Challenge-Summer-2022

I have implemented CRUD operations along with filtering on the following fields :'_id', 'name', 'description', 'stockCount', 'salesPrice', 'costPrice', 'taxRate', 'minCount', 'createdAt', 'updatedAt', 'category'.

Installation Guide
1. Download the code from the github repository.
3. On the root folder, run "npm i" in the terminal (to install the dependencies).
4. run "node app" or "npm start" in the terminal to start the server
You will see the following message "Server is running on port 3000" 
5. You can refer to the curl commands given below to play around with the app.

CURL commands:

To Get all items: 
curl --location --request GET 'http://localhost:3000/inventory/' \
--data-raw ''

To get by ID:
curl --location --request GET 'http://localhost:3000/inventory/<id>' \
--data-raw ''

To create an item:
curl --location --request POST 'http://localhost:3000/inventory/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Mandarin fruit",
    "description": "citrus fruit",
    "stockCount": 90,
    "salesPrice": "10",
    "costPrice": "5",
    "taxRate": "0",
    "minCount": "2"
}'

To update an item:
curl --location --request PUT 'http://localhost:3000/inventory/<id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Mandarin",
    "description": "fruit ",
    "stockCount": "90",
    "salesPrice": "10",
    "costPrice": "5",
    "taxRate": "0",
    "minCount":"0"
}'

To delete an item:
curl --location --request DELETE 'http://localhost:3000/inventory/<id>'
    
To filter the items:
curl --location --request GET 'http://localhost:3000/inventory?name=Mandarin&stockCount=90' \
--data-raw ''
