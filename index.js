
import express from "express";
import engine from "express-engine-jsx";

const app = express();


app.set("views", "./views");
app.set("view engine", "jsx");
app.engine("jsx", engine );

app.get("/users", (_, res) => {
	res.locals.lang = "en";
	res.render("users", {
		users: [{ name: "Max" }, { name: "Bob" }],
	});
});

app.listen(3000, () => console.log("Express server started on port http://localhost:3000"))