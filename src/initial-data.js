import { FaPencilRuler, FaTags, FaJava, FaLanguage } from "react-icons/fa";

const initialData = {
    tags: {
      'tag-1': { id: 'tag-1', content: 'tipo de orden' },
      'tag-2': { id: 'tag-2', content: 'pasos' },
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
        widthColumn: '40%',
        icon: <FaPencilRuler size="15px" className="me-2"></FaPencilRuler>
      },
      'column-3': {
        id: 'column-3',
        title: 'visualizador XML',
        tagIds: [],
        widthColumn: '35%',
        icon: <FaLanguage size="15px" className="me-2"></FaLanguage>
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
  };
  
  export default initialData;
  