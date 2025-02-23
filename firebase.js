// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase 설정 (네가 제공한 설정 정보)
const firebaseConfig = {
  apiKey: "AIzaSyCxCLhm-30UJODruR0Y-SVJtOKNliMGGM4",
  authDomain: "cw-1-83597.firebaseapp.com",
  projectId: "cw-1-83597",
  storageBucket: "cw-1-83597.firebasestorage.app",
  messagingSenderId: "189389095242",
  appId: "1:189389095242:web:d049db8c589769028181b3",
  measurementId: "G-BSLCCTQ0R1"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Firestore에서 `events` 컬렉션 가져오기 (일정 불러오기)
export async function getEvents() {
  const querySnapshot = await getDocs(collection(db, "events"));
  let events = [];
  querySnapshot.forEach((doc) => {
    events.push({ id: doc.id, ...doc.data() });
  });
  return events;
}

// Firestore에 일정 추가하기 (관리자 전용 기능)
export async function addEvent(title, date, time, location, description) {
  try {
    const docRef = await addDoc(collection(db, "events"), {
      title,
      date,
      time,
      location,
      description
    });
    console.log("일정 추가 완료: ", docRef.id);
  } catch (error) {
    console.error("일정 추가 중 오류 발생: ", error);
  }
}

// Firestore에서 일정 삭제하기 (관리자 전용 기능)
export async function deleteEvent(eventId) {
  try {
    await deleteDoc(doc(db, "events", eventId));
    console.log("일정 삭제 완료: ", eventId);
  } catch (error) {
    console.error("일정 삭제 중 오류 발생: ", error);
  }
}
