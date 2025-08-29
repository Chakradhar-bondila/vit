# VIT
Bajaj Assignment
# VIT Full Stack REST API

This is a REST API implementation for the VIT Full Stack question paper.

## Features

- Process arrays containing numbers, alphabets, and special characters
- Separate odd and even numbers
- Convert alphabets to uppercase
- Calculate sum of all numbers
- Create concatenated string with alternating caps in reverse order
- Proper error handling and validation

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Run locally: `npm start` or `npm run dev` (for development)
4. Test the API: `npm test`

## API Endpoints

### POST /bfhl
- **Description**: Main endpoint for data processing
- **Method**: POST
- **Body**: `{ "data": ["array", "of", "mixed", "data"] }`
- **Response**: JSON object with processed data

### GET /bfhl
- **Description**: Health check endpoint
- **Method**: GET
- **Response**: `{ "operation_code": 1 }`

## Example Usage

