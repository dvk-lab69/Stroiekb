'use server';

import { supabase } from '@/lib/supabase';

export async function submitApplication(formData: FormData) {
    const rawFormData = {
        name: formData.get('name') as string,
        company: formData.get('company') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        product_type: formData.get('product_type') as string,
        message: formData.get('message') as string,
        file_url: formData.get('file_url') as string,
    };

    // Normalize phone format to 8XXXXXXXXXX
    let phoneClean = rawFormData.phone.replace(/\D/g, "");
    if (phoneClean.startsWith("7")) {
        phoneClean = "8" + phoneClean.substring(1);
    } else if (phoneClean.length === 10) {
        // If they managed to send 10 digits without code, assume 8
        phoneClean = "8" + phoneClean;
    }
    // If it's formatted like +7 (999)... -> 7999... -> 8999... matches logic above.
    // If user enters 8999... -> 8999... logic above won't catch "startsWith 7". 
    // But UI enforces +7...

    // UI Logic Recap:
    // UI: +7 (999) ...
    // Raw value sent in formData: "+7 (999) ..."
    // clean: "7999..."
    // startsWith("7") -> replace with "8" -> "8999..."
    // Correct.

    rawFormData.phone = phoneClean;

    // Basic server-side validation
    if (!rawFormData.name || !rawFormData.phone) {
        return { success: false, message: 'Заполните обязательные поля' };
    }

    try {
        const { error } = await supabase
            .from('applications')
            .insert([
                {
                    name: rawFormData.name,
                    company: rawFormData.company,
                    phone: rawFormData.phone,
                    email: rawFormData.email,
                    product_type: rawFormData.product_type,
                    message: rawFormData.message,
                    file_url: rawFormData.file_url,
                },
            ]);

        if (error) {
            console.error('Supabase error:', error);
            return { success: false, message: 'Ошибка при сохранении заявки' };
        }

        return { success: true, message: 'Заявка успешно отправлена!' };
    } catch (e) {
        console.error('Unexpected error:', e);
        return { success: false, message: 'Произошла непредвиденная ошибка' };
    }
}
