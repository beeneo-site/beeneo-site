const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const rootDir = __dirname;

// Quellpfade
const platformDir = path.join(homeDir, 'beeneo-platform');
const driveDir = path.join(homeDir, 'Google Drive', 'beeNEO Webseite');

const destPublic = path.join(rootDir, 'public');
const destProducts = path.join(destPublic, 'img', 'products');
const destBlog = path.join(destPublic, 'img', 'blog');
const destLogos = path.join(destPublic, 'logos');
const destTeam = path.join(destPublic, 'team');

[destProducts, destBlog, destLogos, destTeam].forEach(d => fs.mkdirSync(d, { recursive: true }));

console.log("🚀 Otomatik Medya ve İçerik Senkronizasyonu Başlatıldı...");

// 1. REKURSİF DOSYA TARAMA VE KOPYALAMA
function scanAndCopyMedia(sourcePath) {
  if (!fs.existsSync(sourcePath)) return;
  
  const items = fs.readdirSync(sourcePath);
  items.forEach(item => {
    const fullPath = path.join(sourcePath, item);
    const stat = fs.lstatSync(fullPath);

    if (stat.isDirectory()) {
      scanAndCopyMedia(fullPath);
    } else {
      const ext = path.extname(item).toLowerCase();
      
      // Resim ve Vektör Dosyaları
      if (['.jpg', '.jpeg', '.png', '.webp', '.svg'].includes(ext)) {
        let targetFolder = destBlog;
        
        if (item.toLowerCase().includes('logo')) targetFolder = destLogos;
        else if (item.toLowerCase().includes('team') || item.toLowerCase().includes('onal') || item.toLowerCase().includes('schmehl')) targetFolder = destTeam;
        else if (item.toLowerCase().includes('ted') || item.toLowerCase().includes('axle') || item.toLowerCase().includes('lvkon') || item.toLowerCase().includes('motor')) targetFolder = destProducts;

        const targetPath = path.join(targetFolder, item);
        fs.copyFileSync(fullPath, targetPath);
        console.log(`📸 Kopyalandı: ${item} -> ${path.relative(rootDir, targetPath)}`);
      }
    }
  });
}

// 2. TÜM DİZİNLERİ TARA
console.log("🔍 Platform ve Drive dizinleri taranıyor...");
scanAndCopyMedia(platformDir);
scanAndCopyMedia(driveDir);

// 3. BLOG & MARBLISM MDX İÇERİKLERİNİ GÖRSELLERİYLE EŞLEŞTİR
const mdxSource = path.join(platformDir, 'blog');
const blogsJsonPath = path.join(rootDir, 'src', 'data', 'blogs.json');
const posts = [];

if (fs.existsSync(mdxSource)) {
  fs.readdirSync(mdxSource).forEach(file => {
    if (file.endsWith('.mdx') || file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(mdxSource, file), 'utf8');
      const titleMatch = content.match(/title:\s*"(.*?)"/);
      const slugMatch = content.match(/slug:\s*(.*)/);
      const title = titleMatch ? titleMatch[1] : file.replace('.mdx', '');
      const slug = slugMatch ? slugMatch[1].trim() : file.replace('.mdx', '');

      let category = 'engineering';
      const lower = content.toLowerCase();
      if (lower.includes('sureneo') || lower.includes('faas') || lower.includes('tool2tax')) category = 'sureneo';
      else if (lower.includes('lvkon') || lower.includes('e-aks') || lower.includes('powertrain')) category = 'lvkon';

      posts.push({
        id: slug,
        title: title,
        category: category,
        mediaType: 'image',
        mediaUrl: `/img/blog/${slug}.webp`,
        excerpt: content.substring(0, 180).replace(/---[\s\S]*?---/, '').trim() + '...'
      });
    }
  });
}

fs.mkdirSync(path.dirname(blogsJsonPath), { recursive: true });
fs.writeFileSync(blogsJsonPath, JSON.stringify(posts, null, 2), 'utf8');
console.log(`✅ ${posts.length} adet blog makalesi ve ilgili görseller eşleştirildi.`);

console.log("🎉 Bütün medya ve grafik otomasyonu tamamlandı!");