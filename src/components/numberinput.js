(() => ({
  name: 'NumberInput',
  type: 'FORM_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { actionVariableId: value, name, label } = options;
    const isDev = B.env === 'dev';
    const valueText = B.useText(value);

    const Input = () => (
      <div className={[classes.formField, isDev ? classes.dev : ''].join(' ')}>
        <label htmlFor={name}>{label}</label>
        <input
          className={classes.input}
          defaultValue={parseInt(valueText, 10)}
          id={name}
          name={name}
          type="number"
        />
      </div>
    );

    if (isDev) {
      return (
        <div>
          <Input />
        </div>
      );
    }

    return <Input />;
  })(),
  styles: () => ({
    dev: {
      '& > *': {
        pointerEvents: 'none',
      },
    },
    formField: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '0.75rem',
    },
    input: {
      border: '1px solid #DDD',
      borderRadius: '3px',
      fontSize: '1rem',
      height: '1.125rem',
      lineHeight: '1.125rem',
      margin: 0,
      padding: '1.125rem 1rem',
    },
  }),
}))();
