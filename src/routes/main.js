const express = require("express");
const Detail = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/service");
const Contact = require("../models/contact");
const banner1 = require("../models/bannner1");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "649a6fd5d4a4ccf66cd632ed" });
  const slides = await Slider.find();
  //    console.log(slides)
  // console.log(details)

  const Banner1 = await banner1.find();
  const services = await Service.find();

  res.render("index", {
    details: details,
    slides: slides,
    services: services,
    Banner1: Banner1,
  });
});

routes.get("/gellery", async (req, res) => {
  const details = await Detail.findOne({ _id: "649a6fd5d4a4ccf66cd632ed" });

  res.render("gellery", {
    details: details,
  });
});

//process contact form
routes.post("/process-contact-form", async (req, res) => {
  console.log("this form is submit");
  console.log(req.body);
  //save the deta to db
  try {
    const data = await Contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = routes;
