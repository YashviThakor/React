export function setUserData<T>(key: string, value: T, setData: React.Dispatch<React.SetStateAction<any>>) {
    setData((prev: any) => ({ ...prev, [key]: value }));
  }