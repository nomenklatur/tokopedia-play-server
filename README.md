# Tokopedia Play API (Replica)

This is a replica of Tokopedia Play API with basic functionality to provide videos, products, and comments.

## Installation

- clone this repository

```bash
git clone git@github.com:nomenklatur/tokopedia-play-server.git
```
- move to the folder directory

```bash
cd tokopedia-play-server
```

- install the dependencies

```bash
npm install
```

- wait for the installation to finish
- run the server using below command
```bash
npm run local
```
## Features
- provides a list of videos data
- provides video detail data with related products
- provides comments on related videos
- post a new comments on videos

## Database Schema
![image](https://github.com/nomenklatur/tokopedia-play-server/assets/88763669/e35c9780-8a9f-4c98-8082-bba10c2c36ab)

## API Contract

* Video Object
```
{
  video_id: String,
  url_image_thumbnail: String
}
```
* Product Object
```
{
  product_id: String,
  link_product: String,
  title: String,
  price: Integer 
}
```
* Comment Object
```
{
  username: String,
  comment: String,
  timestamp: String
}
```
**GET /videos**
----
  Returns all videos in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```

**GET /videos/:id/products**
----
  Returns the products associated with a specific video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  {
    video: {<video_object},
    products: [
        {product_object},
        {product_object}
    ]
  }
  ```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Video doesn't exist" }`

**GET /videos/:id/comments**
----
  Returns the products associated with a specific video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  {
    video: {<video_object},
    products: [
        {comment_object},
        {comment_object}
    ]
  }
  ```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Video doesn't exist" }`  

**POST /comments**
----
  Creates a comment and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    username: string,
    comment: string
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <user_object> }` 
