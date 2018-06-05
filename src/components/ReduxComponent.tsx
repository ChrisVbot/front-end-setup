// import * as React from 'react'
// import * as Redux from 'redux'

// import { MyReduxState } from './my-root-reducer.ts'

// export interface OwnProps {
//   propFromParent: number
// }

// interface StateProps {
//   propFromReduxStore: string
// }

// interface DispatchProps {
//   onSomeEvent: () => void
// }

// type Props = StateProps & DispatchProps & OwnProps

// interface State {
//   internalComponentStateField: string
// }

// class MyComponent extends React.Component<Props, State> {
//   ...
// }

// function mapStateToProps(state: MyReduxState, ownProps: OwnProps): StateProps {
//   ...
// }

// function mapDispatchToProps(dispatch: Redux.Dispatch<any>, ownProps: OwnProps): DispatchProps {
//   ...
// }

// export default connect<StateProps, DispatchProps, OwnProps>
// (mapStateToProps, mapDispatchToProps)(MyComponent)
