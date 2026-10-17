const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const blogSource = path.join(homeDir, 'beeneo-platform', 'blog');
const blogDestFile = path.join(__dirname, 'src', 'data', 'blogs.json');

console.log("Lese Blog-Artikel und Marblism-Metadaten ein...");

if (!fs.existsSync(blogSource)) {
  console.log(`Pfade prüfen: ${blogSource} nicht gefunden.`);
  process.exit(1);
}

const files = fs.readdirSync(blogSource);
const posts = [];

files.forEach(file => {
  if (file.endsWith('.mdx') || file.endsWith('.md')) {
    const content = fs.readFileSync(path.join(blogSource, file), 'utf8');
    
    const titleMatch = content.match(/title:\s*"(.*?)"/);
    const slugMatch = content.match(/slug:\s*(.*)/);
    
    const title = titleMatch ? titleMatch[1] : file.replace('.mdx', '');
    const slug = slugMatch ? slugMatch[1].trim() : file.replace('.mdx', '');
    
    let category = 'engineering';
    if (content.toLowerCase().includes('sureneo') || content.toLowerCase().includes('faas') || content.toLowerCase().includes('tool2tax')) {
      category = 'sureneo';
    } else if (content.toLowerCase().includes('lvkon') || content.toLowerCase().includes('e-aks') || content.toLowerCase().includes('bus')) {
      category = 'lvkon';
    }

    posts.push({
      id: slug,
      title: title,
      category: category,
      mediaType: 'image',
      mediaUrl: `/img/blog/${slug}.webp`,
      excerpt: content.substring(0, 160).replace(/---[\s\S]*?---/, '').trim() + '...'
    });
  }
});

fs.mkdirSync(path.dirname(blogDestFile), { recursive: true });
fs.writeFileSync(blogDestFile, JSON.stringify(posts, null, 2), 'utf8');

console.log(`Erfolgreich ${posts.length} Blog-Beiträge & Grafiken nach src/data/blogs.json importiert!`);
