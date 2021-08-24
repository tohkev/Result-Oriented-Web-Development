Let's Travel Website Version 2

---

Additional Notes:

When connected to mongodb Atlas, mongoimport only seems to work when importing json files with:
mongoimport --jsonArray --uri mongodb+srv://<username>:<password>@cluster0.anpep.mongodb.net/travels --collection posts --type json --file ../../../../Desktop/posts.json 