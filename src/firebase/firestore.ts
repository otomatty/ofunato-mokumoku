import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// 参加申し込みのデータを保存する関数
export const saveSignupResponse = async (formData: any) => {
  try {
    const docRef = await addDoc(collection(db, "signups"), {
      ...formData,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// お問い合わせのデータを保存する関数（将来的に追加する予定）
export const saveInquiryResponse = async (inquiryData: any) => {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...inquiryData,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
