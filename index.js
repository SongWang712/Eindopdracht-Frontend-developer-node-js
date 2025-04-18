const rq = require("random-quotes")
const express = require("express")
const path = require("path")

const app = express();
const PORT = 3000;

// Serveer de index.html vanuit de "public" map
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/quote",  (req, res) => {
    const quote = rq.default()
   res.json(quote)
})

app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
  });

