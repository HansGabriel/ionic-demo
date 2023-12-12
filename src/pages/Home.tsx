import React, { useEffect } from "react";
import { IonContent, IonPage, IonList, IonText } from "@ionic/react";
import UserItem from "../components/UserItem";
import useUserReducer from "../reducers/useUserReducer";

import type { User, StyleSheet } from "../types";

const UserList: React.FC = () => {
  const { state, fetchUserList, removeUser } = useUserReducer();
  const { users, error } = state;

  useEffect(() => {
    fetchUserList();
  }, []);

  const handleRemoveUser = (index: number) => () => {
    removeUser(index);
  };

  const renderUserItem = (user: User, index: number) => (
    <UserItem
      key={index}
      index={index}
      user={user}
      handleRemoveUser={handleRemoveUser(index)}
    />
  );

  const renderUserList = () => <IonList>{users.map(renderUserItem)}</IonList>;

  const renderNoUsersMessage = () => <IonText>No users found.</IonText>;

  const renderErrorMessage = () => <IonText color="danger">{error}</IonText>;

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <h1 style={styles.title}>User List</h1>
        {error
          ? renderErrorMessage()
          : users.length === 0
          ? renderNoUsersMessage()
          : renderUserList()}
      </IonContent>
    </IonPage>
  );
};

const styles: StyleSheet = {
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default UserList;
