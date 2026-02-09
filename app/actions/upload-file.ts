"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadFile(formData: FormData): Promise<{ success: boolean; url?: string; error?: string }> {
    console.log("=== uploadFile called ===");

    const fileEntry = formData.get("file");

    if (!fileEntry || typeof fileEntry === "string") {
        console.log("No file or invalid file");
        return { success: false, error: "Файл не выбран" };
    }

    // Explicitly cast to unknown then File to handle potential type definitions mismatch
    const file = fileEntry as unknown as File;

    console.log("File received:", `${file.name} (${file.size} bytes)`);

    if (file.size === 0) {
        return { success: false, error: "Файл пуст" };
    }

    // Validate size (50MB)
    if (file.size > 50 * 1024 * 1024) {
        return { success: false, error: "Файл слишком большой (макс. 50 МБ)" };
    }

    // Validate type
    const allowedExtensions = ["doc", "docx", "pdf", "xls", "xlsx", "png", "jpg", "jpeg", "ppt", "pptx"];
    const extension = file.name.split(".").pop()?.toLowerCase();

    if (!extension || !allowedExtensions.includes(extension)) {
        return { success: false, error: "Недопустимый формат файла" };
    }

    try {
        const fileExt = extension;
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `uploads/${fileName}`;

        console.log("Converting to ArrayBuffer...");
        // Use ArrayBuffer directly to avoid Node.js Buffer dependency issues
        const arrayBuffer = await file.arrayBuffer();

        console.log("Uploading to Supabase storage:", filePath);
        const { data, error: uploadError } = await supabase.storage
            .from("applications")
            .upload(filePath, arrayBuffer, {
                cacheControl: "3600",
                upsert: false,
                contentType: file.type,
            });

        console.log("Upload result - data:", data, "error:", uploadError);

        if (uploadError) {
            console.error("Server upload error:", uploadError);
            return { success: false, error: uploadError.message || "Ошибка загрузки" };
        }

        const { data: { publicUrl } } = supabase.storage
            .from("applications")
            .getPublicUrl(filePath);

        return { success: true, url: publicUrl };
    } catch (error: any) {
        console.error("Upload exception:", error);
        return { success: false, error: error.message || "Ошибка при загрузке файла" };
    }
}
