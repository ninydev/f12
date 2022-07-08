import React from "react"

class Contact extends React.Component {

    render() {
        return (
        <tr>
            <td>
                {this.props.contact.name}
            </td>
            <td>
                {this.props.contact.subName}
            </td>
            <td>
                {this.props.contact.number}
            </td>
        </tr>
        )
    }
}

export default Contact