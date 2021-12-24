(() => ({
  category: 'FORM',
  icon: 'NumberInputIcon',
  name: 'NumberInput',
  structure: [
    {
      name: 'NumberInput',
      options: [
        {
          key: 'label',
          label: 'Label',
          type: 'TEXT',
          value: 'Number',
        },
        {
          key: 'name',
          label: 'Name',
          type: 'TEXT',
          value: 'NumberInput',
        },
        {
          key: 'actionVariableId',
          label: 'Key',
          type: 'ACTION_JS_VARIABLE',
          value: '',
        },
        {
          key: 'value',
          label: 'Value',
          type: 'VARIABLE',
          value: [],
        },
      ],
      // $onUpdate: [
      //   {
      //     query: 'UpdateActionVariable',
      //     input: {
      //       id: {
      //         ref: ['options', 'actionVariableId'],
      //       },
      //       name: {
      //         ref: ['options', 'name'],
      //       },
      //     },
      //   },
      // ],
      $afterDelete: [
        {
          query: 'DeleteActionVariable',
          input: {
            id: {
              ref: ['options', 'actionVariableId'],
            },
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
