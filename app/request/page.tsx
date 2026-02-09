"use client";

import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Paperclip, X } from "lucide-react";
import { submitApplication } from "@/app/actions/submit-application";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function RequestPage() {
    const [phone, setPhone] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        // Validate size (50MB)
        if (selectedFile.size > 50 * 1024 * 1024) {
            alert("Файл слишком большой. Максимальный размер: 50 МБ");
            e.target.value = "";
            return;
        }

        // Validate type
        const allowedTypes = [
            "application/msword", // .doc
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
            "application/pdf", // .pdf
            "application/vnd.ms-excel", // .xls
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
            "image/png", // .png
            "image/jpeg", // .jpg, .jpeg
            "application/vnd.ms-powerpoint", // .ppt
            "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
        ];

        // Also check by extension for backup as mime types can be tricky
        const allowedExtensions = ["doc", "docx", "pdf", "xls", "xlsx", "png", "jpg", "jpeg", "ppt", "pptx"];
        const extension = selectedFile.name.split(".").pop()?.toLowerCase();

        if (!allowedTypes.includes(selectedFile.type) && !allowedExtensions.includes(extension || "")) {
            alert("Недопустимый формат файла. Разрешены: docs, pdf, excel, png, jpg, pptx");
            e.target.value = "";
            return;
        }

        setFile(selectedFile);
    };

    const removeFile = () => {
        setFile(null);
        // Reset input value if needed via ref, but simpler to just clear state
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, ""); // Strip non-digits

        // Handle deletion (backspace) - if user deletes, we might want to just let them, 
        // but with a mask it's tricky. 
        // Simple approach: standard mask behavior.

        let formatted = "";

        if (input.length === 0) {
            setPhone("");
            return;
        }

        // If starts with 7 or 8, treat as +7
        if (input[0] === "7" || input[0] === "8") {
            formatted = "+7";
            input = input.substring(1);
        } else {
            // If starts with 9 or other, treat as +7 (X...
            formatted = "+7";
            // input remains as is (e.g. "9...")
        }

        // Limit to 10 digits for the rest
        input = input.substring(0, 10);

        if (input.length > 0) {
            formatted += " (" + input.substring(0, 3);
        }
        if (input.length >= 4) {
            formatted += ") " + input.substring(3, 6);
        }
        if (input.length >= 7) {
            formatted += "-" + input.substring(6, 8);
        }
        if (input.length >= 9) {
            formatted += "-" + input.substring(8, 10);
        }

        setPhone(formatted);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        // Basic Client Validation
        if (!name || !phone || !email) {
            alert("Пожалуйста, заполните имя, телефон и email");
            throw new Error("Validation failed");
        }

        const formData = new FormData(formRef.current!);
        formData.set("name", name);
        formData.set("phone", phone);

        try {
            let fileUrl = "";

            if (file) {
                setIsUploading(true);
                const fileExt = file.name.split(".").pop();
                const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
                const filePath = `uploads/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from("applications")
                    .upload(filePath, file);

                if (uploadError) {
                    console.error("Upload error:", uploadError);
                    alert("Ошибка при загрузке файла. Попробуйте еще раз или отправьте без файла.");
                    setIsUploading(false);
                    return;
                }

                // Get public URL
                const { data: { publicUrl } } = supabase.storage
                    .from("applications")
                    .getPublicUrl(filePath);

                fileUrl = publicUrl;
                setIsUploading(false);
            }

            formData.set("file_url", fileUrl);

            const result = await submitApplication(formData);

            if (!result.success) {
                alert(result.message);
                throw new Error(result.message);
            }

            // On success, the button will animate. We just clear the form.
            setPhone("");
            setName("");
            setEmail("");
            setFile(null);
            formRef.current?.reset();

        } catch (error) {
            console.error("Submission error:", error);
            throw error; // Re-throw to stop button success animation
        }
    };

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="section bg-transparent pb-8">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Заявка
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Оставить <span className="gradient-text">заявку</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Ответим на ваши вопросы и подготовим коммерческое предложение в течение 15 минут.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="section bg-white pt-8">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Контактная информация
                            </h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Телефон</div>
                                        <div className="flex flex-col gap-1">
                                            <a href="tel:+79122449003" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                                                +7 (912) 244-90-03
                                            </a>
                                            <a href="tel:+79122417373" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                                                +7 (912) 241-73-73
                                            </a>
                                            <a href="tel:+79122487959" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                                                +7 (912) 248-79-59
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Email</div>
                                        <a href="mailto:m4Rk@yandex.ru" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                                            m4Rk@yandex.ru
                                        </a>
                                        <div className="text-sm text-gray-500">Ответим в течение часа</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Адрес</div>
                                        <div className="text-lg font-semibold text-gray-900">
                                            г. Екатеринбург, ул. Тверитина, 34А
                                        </div>
                                        <div className="text-sm text-gray-500">Пн-Пт: 9:00 - 18:00</div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?ll=60.624460%2C56.823321&pt=60.624460,56.823321,pm2rdm&z=17"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Заполните форму
                            </h2>

                            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
                                <form
                                    ref={formRef}
                                    className="space-y-5"
                                >
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Ваше имя *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                                placeholder="Иван Иванов"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Компания
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                                placeholder="ООО «Название»"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Телефон *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={phone}
                                                onChange={handlePhoneChange}
                                                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                                placeholder="+7 (999) 000-00-00"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                                placeholder="email@company.ru"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Тип продукции
                                        </label>
                                        <select
                                            name="product_type"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                        >
                                            <option value="">Выберите категорию</option>
                                            <option value="maf">Малые архитектурные формы</option>
                                            <option value="baskets">Корзины для кондиционеров</option>
                                            <option value="ventilation">Вентиляционные системы</option>
                                            <option value="other">Другое</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Сообщение
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none bg-white"
                                            placeholder="Опишите ваш проект, укажите примерные объёмы и сроки..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Прикрепить файл (до 50 МБ)
                                        </label>
                                        <div className="relative">
                                            {!file ? (
                                                <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 cursor-pointer transition-colors group">
                                                    <div className="text-center">
                                                        <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-primary transition-colors" />
                                                        <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                                                            Нажмите для выбора файла
                                                        </span>
                                                        <p className="text-xs text-gray-400 mt-1">
                                                            DOC, PDF, XLS, PNG, JPG, PPTX
                                                        </p>
                                                    </div>
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        onChange={handleFileChange}
                                                        accept=".doc,.docx,.pdf,.xls,.xlsx,.png,.jpg,.jpeg,.ppt,.pptx"
                                                    />
                                                </label>
                                            ) : (
                                                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                                                    <div className="flex items-center gap-3 overflow-hidden">
                                                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <Paperclip className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <span className="text-sm text-gray-700 truncate">
                                                            {file.name}
                                                        </span>
                                                        <span className="text-xs text-gray-400 flex-shrink-0">
                                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={removeFile}
                                                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-6 py-4 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            onClick={handleSubmit}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    {isUploading ? "Загрузка файла..." : "Отправка..."}
                                                </>
                                            ) : (
                                                <>
                                                    Отправить заявку
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-xs text-gray-400 mt-4 text-center">
                                            Нажимая кнопку, вы соглашаетесь с{" "}
                                            <Link href="/privacy" className="underline hover:text-gray-600">
                                                политикой обработки персональных данных
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
