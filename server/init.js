import "./db.js";
import app from "./server.js"

const PORT = 4000;//암묵적으로 4000사용

const handleLsn = () => 
console.log(`✅ Server listening on port http://localhost:${PORT}🚀`);

app.listen(4000, handleLsn);