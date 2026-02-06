
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-2xl font-semibold mb-6 text-center">Официальные реквизиты</h1>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Тип юридического лица</p>
          <p className="font-medium">Индивидуальный предприниматель</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">ФИО</p>
          <p className="font-medium">Анна Владимировна Симонова</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">ИНН</p>
          <p className="font-medium">141800166679</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">ОГРНИП</p>
          <p className="font-medium">325140000073311</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Дата регистрации</p>
          <p className="font-medium">03 декабря 2025 г.</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Адрес регистрации</p>
          <p className="font-medium leading-relaxed">
            ул. Алданская, д. 1, кв. 15,<br />
            Якутск, Республика Саха (Якутия),<br />
            677001, Россия
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Телефон</p>
          <p className="font-medium">+7 924 865 2555</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Электронная почта</p>
          <p className="font-medium">Anna_Simon92@mail.ru</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        Эта страница опубликована для целей проверки партнёрами, банками и поставщиками услуг.
      </div>
    </div>
  </div>
    </div>
  );
}
