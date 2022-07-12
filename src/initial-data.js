import { FaPencilRuler, FaTags } from "react-icons/fa";
import xmlSentences from "./xmlSentences";

const initialData = {
    tags: {
      'tag-1': { id: 'tag-1', content: 'tipo de orden',xml: xmlSentences.tipoOrden },
      'tag-2': { id: 'tag-2', content: 'pasos',xml: xmlSentences.pasos },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'etiquetas',
        tagIds: ['tag-1', 'tag-2'],
        widthColumn: '20%',
        icon: <FaTags size="15px" className="me-2"></FaTags>
      },
      'column-2': {
        id: 'column-2',
        title: 'visualizador gráfico',
        tagIds: [],
        widthColumn: '75%',
        icon: <FaPencilRuler size="15px" className="me-2"></FaPencilRuler>
      }
    },
    columnOrder: ['column-1', 'column-2'],
  };
  
  export default initialData;
  