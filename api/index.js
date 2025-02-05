import { v2 as cloudinary } from "cloudinary";

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

app.post(
  "/api/volunteers",
  upload.single("proofDocument"),
  async (req, res) => {
    try {
      const data = req.body;

      if (data.availability) {
        try {
          data.availability = JSON.parse(data.availability);
        } catch (parseError) {
          return res.status(400).json({ error: "Invalid availability format" });
        }
      }
      console.log(data);
      const volunteer = await prisma.volunteer.create({
        data: {
          ...data,
          proofDocument: req.file ? req.file.path : null,
        },
      });
      res.json(volunteer);
    } catch (error) {
      if (req.file && req.file.path) {
        await cloudinary.uploader.destroy(req.file.filename);
      }
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
);

app.get("/api/volunteers", async (req, res) => {
  try {
    const volunteers = await prisma.volunteer.findMany();
    res.json(volunteers);
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
    res.status(400).json({ error: error.message });
  }
});

app.post(
  "/api/ngos",
  upload.single("proofOfRegistration"),
  async (req, res) => {
    try {
      const data = req.body;

      if (data.availability) {
        try {
          data.availability = JSON.parse(data.availability);
        } catch (parseError) {
          return res.status(400).json({ error: "Invalid availability format" });
        }
      }
      console.log(data);
      const ngo = await prisma.nGO.create({
        data: {
          ...data,
          proofOfRegistration: req.file ? req.file.path : null,
          contactPerson: JSON.parse(data.contactPerson),
        },
      });
      res.json(ngo);
    } catch (error) {
      if (req.file && req.file.path) {
        await cloudinary.uploader.destroy(req.file.filename);
      }
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
);
// app.post(
//   "/api/ngos",

//   async (req, res) => {
//     try {
//       const data = JSON.parse(req.body.data);
//       const ngo = await prisma.nGO.create({
//         data: {
//           ...data,

//           contactPerson: JSON.parse(data.contactPerson),
//         },
//       });
//       res.json(ngo);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   }
// );
const deleteOldFile = async (url) => {
  if (!url) return;
  try {
    const publicId = url.split("/").slice(-1)[0].split(".")[0];
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting old file:", error);
  }
};

app.put(
  "/api/ngos/:id",
  upload.single("proofOfRegistration"),
  async (req, res) => {
    try {
      const data = JSON.parse(req.body.data);
      const oldNgo = await prisma.nGO.findUnique({
        where: { id: req.params.id },
      });

      if (req.file) {
        await deleteOldFile(oldNgo.proofOfRegistration);
        data.proofOfRegistration = req.file.path;
      }

      const ngo = await prisma.nGO.update({
        where: { id: req.params.id },
        data: {
          ...data,
          contactPerson: JSON.parse(data.contactPerson),
        },
      });
      res.json(ngo);
    } catch (error) {
      if (req.file && req.file.path) {
        await cloudinary.uploader.destroy(req.file.filename);
      }
      res.status(400).json({ error: error.message });
    }
  }
);

app.put(
  "/api/volunteers/:id",
  upload.single("proofOfStudent"),
  async (req, res) => {
    try {
      const data = JSON.parse(req.body.data);
      const oldVolunteer = await prisma.volunteer.findUnique({
        where: { id: req.params.id },
      });

      if (req.file) {
        await deleteOldFile(oldVolunteer.proofDocument);
        data.proofDocument = req.file.path;
      }

      const volunteer = await prisma.volunteer.update({
        where: { id: req.params.id },
        data: {
          ...data,
          availability: JSON.parse(data.availability),
        },
      });
      res.json(volunteer);
    } catch (error) {
      if (req.file && req.file.path) {
        await cloudinary.uploader.destroy(req.file.filename);
      }
      res.status(400).json({ error: error.message });
    }
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
