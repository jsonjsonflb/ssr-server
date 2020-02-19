export function createAction(type, payload) {
  return {
    type,
    payload: payload || {}
  };
}


export const withStyle = (props,styles) => {
  if(styles._getCss) {
    props.staticContext.css.push(styles._getCss())
  }
  return false
}