import { v2 as cloudinary } from "cloudinary";
import auth0 from "../Auth.js";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

import express from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import cors from "cors";

import { CloudinaryStorage } from "multer-storage-cloudinary";

const prisma = new PrismaClient();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ngo-volunteer-platform",
    allowed_formats: ["jpg", "png", "pdf", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

const upload = multer({ storage: storage });

app.get("/api/ngos/:id", async (req, res) => {
  try {
    const ngo = await prisma.nGO.findUnique({
      where: { id: req.params.id },
    });
    res.json(ngo);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/ngos", async (req, res) => {
  try {
    const ngos = await prisma.nGO.findMany();
    res.json(ngos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//----------------------

//-----

app.get("/api/volunteers", async (req, res) => {
  try {
    const volunteers = await prisma.volunteer.findMany();
    res.json(volunteers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post("/api/hist/:id", async (req, res) => {
  try {
    const msg = req.body.msg;
    const ty = req.body.type;
    const id = req.params.id;

    const chat = await prisma.chatHistory.create({
      data: {
        userId: id,
        type: ty,
        content: msg,
      },
    });

    res.json(chat);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
app.get("/api/hist/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const chats = await prisma.chatHistory.findMany({
      where: { userId: id },
    });

    res.json(chats);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get("/api/volunteers/:id", async (req, res) => {
  try {
    const volunteer = await prisma.volunteer.findUnique({
      where: { id: req.params.id },
    });
    res.json(volunteer);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
// Modify volunteer route
app.post(
  "/api/volunteers",

  async (req, res) => {
    const data = req.body;
    console.log("data", req.body);
    try {
      const volunteer = await prisma.volunteer.create({
        data: {
          ...data,
          proofDocument: null,
        },
      });
      res.json(volunteer);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
);

app.post(
  "/api/ngos",

  async (req, res) => {
    try {
      const data = req.body;
      console.log("data", req);
      const ngo = await prisma.nGO.create({
        data: {
          ...data,
          proofOfRegistration: null,
          contactPerson: JSON.parse(data.contactPerson),
        },
      });
      res.json(ngo);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
