import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ConsentPage() {
    return (
        <div className="pt-20">
            <section className="section bg-white">
                <div className="container-custom max-w-4xl">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>На главную</span>
                    </Link>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                        Согласие на обработку персональных данных
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p>
                            Настоящим, свободно, своей волей и в своем интересе даю согласие <strong>ИП Кольберг Марк</strong> (далее – Оператор) на обработку моих персональных данных.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Цель обработки персональных данных</h2>
                        <p>
                            Обработка персональных данных осуществляется в целях:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Обеспечения обмена короткими текстовыми сообщениями в режиме онлайн-диалога;</li>
                            <li>Обеспечения функционирования обратного звонка;</li>
                            <li>Направления коммерческих предложений и информации о товарах и услугах;</li>
                            <li>Заключения и исполнения договоров.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Перечень персональных данных</h2>
                        <p>
                            Согласие дается на обработку следующих персональных данных:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Фамилия, имя, отчество;</li>
                            <li>Номера контактных телефонов;</li>
                            <li>Адреса электронной почты;</li>
                            <li>Название компании (место работы) и должность;</li>
                            <li>Сведения, собираемые посредством метрических программ (в том числе файлы cookie).</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Действия с персональными данными</h2>
                        <p>
                            В ходе обработки с персональными данными будут совершены следующие действия: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (распространение, предоставление, доступ), блокирование, удаление, уничтожение.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Срок действия согласия и порядок отозыва</h2>
                        <p>
                            Согласие действует бессрочно до момента его отзыва.
                        </p>
                        <p className="mt-4">
                            Согласие может быть отозвано мною в любое время путем направления письменного уведомления Оператору по электронной почте <strong>m4rk.kb@yandex.ru</strong> с пометкой «Отзыв согласия на обработку персональных данных».
                        </p>

                        <div className="border-t border-gray-200 mt-12 pt-8">
                            <p className="text-sm text-gray-500">
                                <strong>Оператор:</strong> ИП Кольберг Марк<br />
                                <strong>Контактный email:</strong> m4rk.kb@yandex.ru
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
