export function createAction(type: any, payload: any) {
  return {
    type,
    payload: payload || {}
  };
}

export const withStyle = (props: any, styles: any) => {
  if (styles._getCss) {
    props.staticContext.css.push(styles._getCss());
  }
  return false;
};
