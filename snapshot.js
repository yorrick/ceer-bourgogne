const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function takeSnapshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewportSize({ width: 1200, height: 800 });
  
  try {
    console.log('Taking snapshot of http://localhost:3001...');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    
    // Create snapshots directory if it doesn't exist
    const snapshotsDir = path.join(__dirname, 'snapshots');
    if (!fs.existsSync(snapshotsDir)) {
      fs.mkdirSync(snapshotsDir, { recursive: true });
    }
    
    // Generate filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `snapshot-${timestamp}.png`;
    const filepath = path.join(snapshotsDir, filename);
    
    // Take screenshot
    await page.screenshot({ path: filepath, fullPage: true });
    
    console.log(`Screenshot saved to: ${filepath}`);
    
  } catch (error) {
    console.error('Error taking snapshot:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

takeSnapshot(); 