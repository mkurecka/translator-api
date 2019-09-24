# translator-api

## Purpose of project

API service for translating text.

!!! Use wisely. Just for educational purpose. !!!

## Run application

`npm install`

`npm start`

## Running translation

Homepage: (should show OK status)
`http://localhost:3000`

API point:
`http://localhost:3000/api/translate/:sourceLang/:targetLang/?text=:text`

- sourceLang: original languague of text
- targetLang: desired languague
- text: text for translating

API point with sample request:
`http://localhost:3000/api/translate/cs/en/text=Jak se máš? Dnes je pondělí`
