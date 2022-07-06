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
      },
      'column-2': {
        id: 'column-2',
        title: 'visualizador gráfico',
        tagIds: [],
      }
    },
    columnOrder: ['column-1', 'column-2'],
  };
  
  export default initialData;
  