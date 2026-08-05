// ==========================================================
// ตั้งค่า Firebase ของคุณตรงนี้
// วิธีหา: Firebase Console -> Project settings -> General
//         -> Your apps -> SDK setup and configuration
// อย่าลืมเปิดใช้งาน "Realtime Database" (ไม่ใช่ Firestore) ด้วย
// ==========================================================
export const firebaseConfig = {
  apiKey: "AIzaSyCCTu4CtGIFgAHZs7pbNAOuOKVFfF7LN_U",
  authDomain: "spbms-43caf.firebaseapp.com",
  // TODO: ยังไม่มีค่านี้ — ต้องไปเปิด Realtime Database ก่อน แล้ว
  // คัดลอก databaseURL มาวางแทนบรรทัดนี้ (ดูวิธีด้านล่าง)
  databaseURL: "https://spbms-43caf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "spbms-43caf",
  storageBucket: "spbms-43caf.firebasestorage.app",
  messagingSenderId: "507303428364",
  appId: "1:507303428364:web:945243dda03ef26f6e4929"
};

// Realtime Database Security Rules ที่แนะนำ (วางใน Firebase Console -> Realtime Database -> Rules)
// คัดลอกจาก database.rules.json ที่แนบมาในโปรเจกต์นี้
