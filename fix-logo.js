const fs = require("fs");
const path = require("path");

// 1. NAVBAR LOGO GÜNCELLEMESİ
const navbarPath = path.join(__dirname, "src", "components", "Navbar.tsx");
let navbarCode = fs.readFileSync(navbarPath, "utf8");

const logoRegex = /<Link href=\{`\/\$\{lang\}`\} className="flex items-center gap-2[^>]*>([\s\S]*?)<\/Link>/;
const newLogoSection = `<Link href={\`/\${lang}\`} className="flex items-center gap-2 z-50">
  <img src="/logos/beeNEO_Logo2026beebgd.png" alt="beeNEO Logo" className="h-10 w-auto object-contain" />
  <span className="text-2xl font-black text-white tracking-tight">
    <span className="text-blue-500">bee</span>NEO
  </span>
</Link>`;

if (navbarCode.match(logoRegex)) {
    navbarCode = navbarCode.replace(logoRegex, newLogoSection);
    fs.writeFileSync(navbarPath, navbarCode);
    console.log("✅ Orijinal logo (beeNEO_Logo2026beebgd.png) sisteme entegre edildi!");
}

// 2. FAVICON (SEKME İKONU) AKTİVASYONU
const favSrc = path.join(__dirname, "public", "logos", "favicon.ico");
const favDest = path.join(__dirname, "src", "app", "favicon.ico");

if (fs.existsSync(favSrc)) {
    fs.copyFileSync(favSrc, favDest);
    console.log("✅ Sekme ikonu (favicon.ico) başarıyla aktif edildi!");
}
