const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB config
const uri = "mongodb+srv://mern-book-store:TEKZxBMXXwaV9ov6@bookstore.arz5j6l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    // Create a collection
    const bookCollections = client.db("BookInventory").collection("books");

    // Insert a book to the db (post)
    app.post("/upload-book", async(req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // Get all books from db
    app.get("/all-books", async (req, res) => {
      try {
        const books = await bookCollections.find().toArray();
        const booksWithDetails = books.map(book => ({
          ...book,
          authorName: book.authorName,
          bookDescription: book.bookDescription,
          category: book.bookCategory,
          bookPDFURL: book.bookPDFURL,
        }));
        res.json(booksWithDetails);
      } catch (error) {
        console.error("Error fetching all books:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    //get orderr
    app.get("/orders", async (req, res) => {
      try {
        const orders = await orderCollections.find().toArray();
        res.json(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // Update a book's data 
    app.patch("/book/:id", async(req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updateBookData
        }
      };
      // Update
      const result = await bookCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // Delete a book
    app.delete("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    // Search by category
    app.get("/all-bookss", async(req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    // GET single book
    app.get("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });






   // Create a collection for orders
const orderCollections = client.db("BookInventory").collection("orders");


  app.post("/place-order", async (req, res) => {
      const orderData = req.body;
      const result = await orderCollections.insertOne(orderData);
      res.send(result);
  });

    // ping to confirm successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})