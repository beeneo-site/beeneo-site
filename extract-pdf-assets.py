import fitz  # PyMuPDF
import os
import json

# Pfade definieren
pdf_path = r"C:\Users\AyhanÖnal\beeneo-platform\beeNEO Lvkon Products_20250730.pdf"
output_dir = r"C:\script\beeneo-website\public\img\products"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
extracted_images = []

img_count = 0
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images(full=True)
    
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        # Bilddateinamen generieren
        image_filename = f"lvkon_p{page_index + 1}_img{img_index + 1}.{image_ext}"
        image_filepath = os.path.join(output_dir, image_filename)
        
        with open(image_filepath, "wb") as f:
            f.write(image_bytes)
            
        extracted_images.append({
            "page": page_index + 1,
            "filename": image_filename,
            "path": f"/img/products/{image_filename}"
        })
        img_count += 1

print(f"✅ Toplam {img_count} adet orijinal Lvkon ürün görseli başarıyla çıkarıldı ve '{output_dir}' klasörüne kaydedildi.")