import WidgetBuscador from "../components/widgetBuscador"
import WidgetFichas from "../components/widgetFichas"
export default function Home() {
  return (
    <div ClassName="card">
      <div ClassName="formgrid grid">
        <div ClassName="field col">
          <WidgetFichas></WidgetFichas>
        </div>
      </div>
    </div>
  )
}
