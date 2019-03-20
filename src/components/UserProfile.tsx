import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import Modal from "react-modal";

type Props = {
  match: {
    params: {
      userId: string;
    };
    url: string;
  };
};

const USERS = [
  { id: 1, name: "Anna" },
  { id: 2, name: "John" },
  { id: 3, name: "Michael" }
];

const UserModal = (props: any) => (
  <Modal isOpen onRequestClose={() => props.history.back()}>
    <div>
      <h2>Modal</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Link to={props.match.url.replace("/modal", "")}>Close modal</Link>
    </div>
  </Modal>
);

class UserProfile extends Component<Props> {
  render() {
    const { match } = this.props;
    const userId = parseInt(match.params.userId, 10);
    const user = USERS.find(u => u.id === userId);
    if (!user) {
      return <Redirect to="/users" />;
    }
    return (
      <>
        <h2>User: {user && user.name}</h2>
        <Link to={`${match.url}/modal`}>Open modal</Link>
        <Route path={`${match.url}/modal`} component={UserModal} />
      </>
    );
  }
}

export default UserProfile;
