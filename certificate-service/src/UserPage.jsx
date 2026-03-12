function Certificate({ certificateType, time, status }) {
  return (
    <li className="list-row border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2">
      <div>
        <div className="text-xs font-semibold">{certificateType}</div>
        <div className="text-xs opacity-60">{time}</div>
      </div>
      <span className={`badge badge-sm ${status === 1 ? "badge-warning" : "badge-success"}`}>
        {status === 1 ? "В процессе" : "Готово"
      }</span>
    </li>
  )
}

export default function UserPage() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="w-full max-w-md text-2xl">

        {/* Заголовок страницы */}
        <div className="text-center py-1">
          <h1 className="font-bold">
            Заказ справок
          </h1>
        </div>

        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">

            {/* Выбор типа справки */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-base">Тип справки</legend>
                <select defaultValue="Стандартная" className="select w-full">
                  <option>Стандартная</option>
                  <option>Для военкомата</option>
                  <option>Для налоговой инспекции</option>
                  <option>Для социального фонда</option>
                </select>
            </fieldset>
          
          {/* Кнопка заказа справки */}
          <button className="btn btn-primary">
            Заказать справку
          </button>

          {/* Список своих заказов */}
          <p className="pb-0 mt-1 text-xs opacity-60 tracking-wide">Мои справки</p>
          <ul className="list bg-base-100 rounded-box shadow-md border border-primary">
            <Certificate certificateType={"Стандартная"} time={"00.00.0000 — 00:00"} status={1}/>
            <Certificate certificateType={"Для военкомата"} time={"00.00.0000 — 00:00"} status={1}/>
            <Certificate certificateType={"Для налоговой инспекции"} time={"00.00.0000 — 00:00"} status={2}/>
            <Certificate certificateType={"Для социального фонда"} time={"00.00.0000 — 00:00"} status={2}/>
          </ul>

          </div>
        </div>
      </div>
    </div>
  )
}
