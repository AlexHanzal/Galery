// ============================================================================
// SERVER CONFIGURATION - Minimal Static Server
// ============================================================================

const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'src/html', 'src/css', and 'src/js'
const baseDir = path.join(__dirname, '..');
app.use(express.static(path.join(baseDir, 'html')));
app.use('/css', express.static(path.join(baseDir, 'css')));
app.use('/js', express.static(path.join(baseDir, 'Js')));

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(baseDir, 'html', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Static server running at http://localhost:${PORT}/`);
});