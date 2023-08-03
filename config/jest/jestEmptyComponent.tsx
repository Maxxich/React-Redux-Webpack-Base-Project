interface IJestEmptyComppnent {
  "data-testid"?: string
}

const jestEmptyComponent = function (props: IJestEmptyComppnent) {
  return <div data-testid={props["data-testid"]}/>
}

export default jestEmptyComponent
