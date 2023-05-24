import NumberState from './pages/NumberState'
import InputTest from './pages/InputTest'
import ShowHideModal from './pages/ShowHideModal'
import RadioInputTest from './pages/RadioInputTest'
import HigherOrderRadioTest from './pages/HigherOrderRadioInputTest'
import BasicForm from './pages/BasicForm'
import ObjectState from './pages/ObjectState'
import ArrayState from './pages/ArrayState'

export default function App() {
  return (
    <main>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </main>
  )
}
