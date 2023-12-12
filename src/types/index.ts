import type { IonicReactProps } from "@ionic/react/dist/types/components/IonicReactProps";

export type User = {
  name: {
    first: string;
    last: string;
  };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
};

export type StyleSheet = NonNullable<IonicReactProps["style"]>;
