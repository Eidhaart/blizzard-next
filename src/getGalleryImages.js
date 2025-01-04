import fs from "fs";
import path from "path";

export function getGalleryImages(folderName) {
  // Resolve the path
  const basePath = path.join(
    process.cwd(),
    "public",
    "images",
    "gallery",
    folderName
  );

  // Log the resolved path for debugging
  console.log("Resolved folder path:", basePath);

  // Ensure the folder exists
  if (!fs.existsSync(basePath)) {
    throw new Error(`Folder does not exist: ${basePath}`);
  }

  // Read all filenames in the folder
  const files = fs.readdirSync(basePath);

  // Return an array of public URLs
  return files.map((filename) => `/images/gallery/${folderName}/${filename}`);
}
