import _ from './App.module.scss';
import {Modal} from "@components/common";
import {DataTable, ItemForm, TableHeader} from "@components/transitions";

function App() {

  return (
    <main className={_.app}>
      <Modal>
        <ItemForm/>
      </Modal>
      <TableHeader/>
      <DataTable/>
    </main>
  )
}

export default App;
