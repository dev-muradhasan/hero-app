import { toast } from "react-toastify";

// get
export const loadAppsList = () => {
  try {
    const data = localStorage.getItem("appList");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// save
// export const updateList = (appData, setInstalled) => {
//   const appList = loadAppsList();
//   try {
//     // const isDuplicate = appList.some((p) => p.id === appData.id);
//     // if (isDuplicate) return toast.error("Already added!");
//     const updatedAppList = [...appList, appData];
//     localStorage.setItem("appList", JSON.stringify(updatedAppList));
//     sesetInstalled(true)
//     toast.success("Successfully Added to App List.");
//   } catch (err) {
//     console.log(err);
//   }
// };

// delete
export const removeFromAppList = (id) => {
  const appList = loadAppsList();
  try {
    const updatedAppList = appList.filter((p) => p.id !== id);
    localStorage.setItem("appList", JSON.stringify(updatedAppList));
    toast.error("Removed from App List");
  } catch (err) {
    console.log(err);
  }
};
