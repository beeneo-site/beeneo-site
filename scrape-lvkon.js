const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://www.lvkon.com/en/product.php";
const DOMAIN = "http://www.lvkon.com";
const IMG_DIR = path.join(__dirname, "public", "img", "products");
const DATA_FILE = path.join(__dirname, "src", "data", "lvkon_scraped.json");

async function downloadImage(url, filename) {
    const filepath = path.join(IMG_DIR, filename);
    if (fs.existsSync(filepath)) return `/img/products/${filename}`;

    try {
        const response = await axios({ url, responseType: "stream", timeout: 10000 });
        return new Promise((resolve, reject) => {
            const writer = fs.createWriteStream(filepath);
            response.data.pipe(writer);
            writer.on("finish", () => resolve(`/img/products/${filename}`));
            writer.on("error", reject);
        });
    } catch (error) {
        console.error(`❌ Resim indirilemedi: ${url}`);
        return null;
    }
}

async function scrapeLvkonProducts() {
    console.log("🚀 Lvkon web sitesine (www.lvkon.com) bağlanılıyor...");
    
    if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });
    if (!fs.existsSync(path.dirname(DATA_FILE))) fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });

    try {
        const response = await axios.get(BASE_URL);
        const $ = cheerio.load(response.data);
        const products = [];

        console.log("🔍 Tablolar ve veriler analiz ediliyor...");

        $("table tr").each((index, element) => {
            const columns = $(element).find("td");
            
            if (columns.length >= 5) {
                const model = $(columns[0]).text().trim();
                const vehicleType = $(columns[1]).text().trim();
                const transmission = $(columns[2]).text().trim();
                const powerTorque = $(columns[3]).text().trim();
                const maxSpeed = $(columns[4]).text().trim();
                const maxOutput = $(columns[5]).text().trim();
                
                let imgRelPath = $(element).find("img").attr("src");
                let imgUrl = null;
                let imgFilename = `lvkon_scraped_${index}.jpg`;

                if (imgRelPath) {
                    imgUrl = imgRelPath.startsWith("http") ? imgRelPath : DOMAIN + (imgRelPath.startsWith("/") ? "" : "/") + imgRelPath;
                    const ext = path.extname(imgRelPath).split('?')[0] || ".png";
                    imgFilename = `lvkon_${model.replace(/[^a-zA-Z0-9]/g, "_")}${ext}`;
                }

                if (model && model.length > 2 && !model.includes("Product Model")) {
                    products.push({
                        model,
                        vehicleType,
                        transmission,
                        powerTorque,
                        maxSpeed,
                        maxOutput,
                        imgUrl,
                        imgFilename
                    });
                }
            }
        });

        console.log(`✅ ${products.length} adet ürün verisi bulundu. Resimler indiriliyor...`);

        for (let prod of products) {
            if (prod.imgUrl) {
                const localPath = await downloadImage(prod.imgUrl, prod.imgFilename);
                prod.localImage = localPath;
            }
        }

        fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2), "utf8");
        console.log(`🎉 İşlem Tamamlandı! Veriler başarıyla kaydedildi: ${DATA_FILE}`);

    } catch (error) {
        console.error("❌ Web sitesine erişilemedi veya yapısal bir hata oluştu:", error.message);
    }
}

scrapeLvkonProducts();