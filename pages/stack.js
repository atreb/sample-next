import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return {params: req.params}
  }

  render() {
    return (
      <div>
        Props + Query {JSON.stringify(this.props, null, '  ')}
      </div>
    )
  }
}