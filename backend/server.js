import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = 4000;
const DATA_FILE = './data.json';

app.use(cors());
app.use(bodyParser.json());

// Helper to read/write data
const readData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    return {
      pageSections: {},
      contactNumber: '',
      socialLinks: { facebook: '', twitter: '', instagram: '', linkedin: '' },
      privacyPolicy: ''
    };
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
};
const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// GET all content
app.get('/api/content', (req, res) => {
  res.json(readData());
});

// PUT all content
app.put('/api/content', (req, res) => {
  writeData(req.body);
  res.json({ success: true });
});

// Individual endpoints (optional)
app.get('/api/pageSections', (req, res) => {
  res.json(readData().pageSections);
});
app.put('/api/pageSections', (req, res) => {
  const data = readData();
  data.pageSections = req.body;
  writeData(data);
  res.json({ success: true });
});

app.get('/api/contactNumber', (req, res) => {
  res.json({ contactNumber: readData().contactNumber });
});
app.put('/api/contactNumber', (req, res) => {
  const data = readData();
  data.contactNumber = req.body.contactNumber;
  writeData(data);
  res.json({ success: true });
});

app.get('/api/socialLinks', (req, res) => {
  res.json(readData().socialLinks);
});
app.put('/api/socialLinks', (req, res) => {
  const data = readData();
  data.socialLinks = req.body;
  writeData(data);
  res.json({ success: true });
});

app.get('/api/privacyPolicy', (req, res) => {
  res.json({ privacyPolicy: readData().privacyPolicy });
});
app.put('/api/privacyPolicy', (req, res) => {
  const data = readData();
  data.privacyPolicy = req.body.privacyPolicy;
  writeData(data);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
