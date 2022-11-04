import WidgetBuscador from "../components/widgetBuscador"
import WidgetFichas from "../components/widgetFichas"
export default function Home() {
  return (
    <div ClassName="card">
      <div ClassName="formgrid grid">
        <div ClassName="field col-9">
          <WidgetBuscador></WidgetBuscador>
        </div>
        <div ClassName="field col-3">
          <WidgetFichas></WidgetFichas>
        </div>
      </div>
    </div>
  )
}