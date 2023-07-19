const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const mongoose = require("mongoose");
const { connectToMongoDB } = require("../src/connection");
const Detail = require("./models/detail");
const Slider = require("./models/slider");
const Service = require("./models/service");
const Banner1 = require("./models/bannner1");

const dotenv = require("dotenv");
dotenv.config();
const app = express();

const PORT = process.env.PORT;

const routes = require("./routes/main");

// /static/css/style.css
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use("/", routes);

//((template engine))
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//db connection
connectToMongoDB(
  "mongodb+srv://khansharukhjpr66:v1f6w74Ocn5KcDMN@cluster0.ayshzfu.mongodb.net/durgesh_tut"
).then(() => console.log("MongoDB connected "));

// Slider.create([
//     {
//         title: "Learn java in very easy menner",
//         subTitle: 'java is one of the most popular programing language',
//         imageUrl: "/static/images/img_1.jpg"
//     },
//     {
//         title: "What is Express in nodejs",
//         subTitle: 'Express is most femous web framwork of nodejs programming ',
//         imageUrl: "/static/images/img_2.jpg"
//     },
//     {
//         title: "what about node js",
//         subTitle: 'Node js is runtime environment to execute javascript outside browser ',
//         imageUrl: "/static/images/img_3.webp"
//     },
// ]);

// Detail.create({
//     brandName: "Appic Software",
//     brandIconUrl: "/public/images/logo.jpg",
//     links: [
//         {
//             label: "Home",
//             url: "/"
//         },
//         {
//             label: "services",
//             url: "/services"
//         },
//         {
//             label: "Gellery",
//             url: "/gellery"
//         },
//         {
//             label: "About",
//             url: "/about"
//         },
//         {
//             label: "Contact Us",
//             url: "/contact-us"
//         }
//     ]

// });

// Service.create([
//   {
//     icon: "fa-sharp fa-solid fa-book",
//     title: "Provide Best Courses",
//     description:
//       "We provide courses that helps our student in learning and in placement",
//     linkText: "https://www.learncodewithdurgesg.com",
//     link: "Check",
//   },
//   {
//     icon: "fa-brands fa-wordpress",
//     title: "learn Projects ",
//     description:
//       "We provide courses that helps our student in learning and in placement",
//     linkText: "https://www.learncodewithdurgesg.com",
//     link: "Learn",
//   },
//   {
//     icon: "fa-brands fa-wordpress",
//     title: "learn Projects ",
//     description:
//       "We provide courses that helps our student in learning and in placement",
//     linkText: "https://www.learncodewithdurgesg.com",
//     link: "Learn",
//   },
// ]);

// Banner1.create({
//   title: "Start learning new technologuy hare !!",
//   description:
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ex nesciunt autem veritatis inventore explicabo soluta praesentium dolorum laborum neque.",

  
// });

app.listen(PORT, () => {
  console.log(`server is on port at ${PORT}`);
});
