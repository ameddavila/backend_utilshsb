import WidgetBuscador from "../components/widgetBuscador"
import WidgetFichas from "../components/widgetFichas"
export default function Home() {
  return (
    <div className="flex card-container indigo-container">
      <div className="flex-4">
        <WidgetBuscador></WidgetBuscador>
      </div>
      <div className="flex-1">
        <WidgetFichas></WidgetFichas>
      </div>
    </div>
  )
}
