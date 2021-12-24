(() => ({
  category: 'FORM',
  icon: 'CheckboxIcon',
  name: 'CheckboxInput',
  structure: [
    {
      name: 'CheckboxInput',
      options: [
        {
          key: 'label',
          label: 'Label',
          type: 'TEXT',
          value: 'Checkbox',
        },
        {
          key: 'name',
          label: 'Name',
          type: 'TEXT',
          value: 'CheckboxInput',
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
      //         ref: ['options', 'label'],
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
