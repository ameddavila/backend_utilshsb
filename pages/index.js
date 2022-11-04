import WidgetBuscador from "../components/widgetBuscador"
import WidgetFichas from "../components/widgetFichas"
export default function Home() {
  return (
    <div className="grid">
      <div className="col-9">
        <WidgetBuscador></WidgetBuscador>
      </div>
      <div className="col-3">
        <WidgetFichas></WidgetFichas>
      </div>
    </div>
  )
}
