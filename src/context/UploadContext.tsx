// upload Context

import { createContext, ReactNode, useState } from "react";

export type uploadProps = {
  setURL: React.Dispatch<React.SetStateAction<string>>;
  url: string;
};

let initialUploadState: uploadProps = {
  setURL: () => {},
  url: "",
};

export const UpLoadedValueContext =
  createContext<uploadProps>(initialUploadState);

type uploadContextProps = {
  children: ReactNode;
};

const UpLoadedValueContextProvider = ({ children }: uploadContextProps) => {
  const [url, setURL] = useState<string>("")!;
  return (
    <UpLoadedValueContext.Provider
      value={{ url, setURL } as uploadProps}
    >
      {children}
    </UpLoadedValueContext.Provider>
  );
};

export default UpLoadedValueContextProvider;