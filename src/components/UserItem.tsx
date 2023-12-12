import React from "react";
import {
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonImg,
} from "@ionic/react";

import type { User, StyleSheet } from "../types";

type UserItemProps = {
  index: number;
  user: User;
  handleRemoveUser: () => void;
};

const UserItem: React.FC<UserItemProps> = ({
  index,
  user,
  handleRemoveUser,
}) => {
  return (
    <IonItemSliding key={index}>
      <IonItem style={styles.userItem}>
        <IonImg src={user.picture.thumbnail} style={styles.userImage} />
        <IonLabel style={styles.userLabel}>
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>{user.email}</p>
        </IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={handleRemoveUser} color="danger">
          Remove
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

const styles: StyleSheet = {
  userItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  userLabel: {
    flex: 1,
  },
};

export default UserItem;
