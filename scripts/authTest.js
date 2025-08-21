const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../devcontainer/.env.local') });

const jwt = require('jsonwebtoken');

// 🔐 Confirm secret loaded
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is missing from environment');
}

// 🧬 Test payloads
const testPayloads = [
  { userId: 'curator-001', role: 'curator', overlay: 'sigil-9283' },
  { userId: 'viewer-002', role: 'viewer', overlay: 'sigil-9283' },
  { userId: 'admin-003', role: 'admin', overlay: 'vault-core' },
  { userId: 'rogue-004', role: 'unauthorized', overlay: 'unknown' }
];

// 🧪 Run tests
testPayloads.forEach((payload, index) => {
  console.log(`\n🔹 Test Case ${index + 1}: ${payload.role.toUpperCase()}`);

  try {
    // Sign token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Signed Token:', token);

    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Payload:', decoded);

    // Optional: Role-based assertions
    if (decoded.role === 'curator') {
      console.log('✅ Curator access granted');
    } else if (decoded.role === 'admin') {
      console.log('🛡️ Admin access granted');
    } else if (decoded.role === 'viewer') {
      console.log('👁️ Viewer access granted');
    } else {
      console.log('🚫 Access denied: Unknown role');
    }

  } catch (err) {
    console.error('❌ Token Error:', err.message);
  }
});