import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }
  // 데이터 읽는 함수
  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    // 데이터 갱신 시 호출되는 리스너
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    // 언마운트 시 리스너를 detach 하기위해 사용
    return () => off(query);
  }
  // 데이터 생성과 갱신에 공통적으로 사용되는 함수
  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }
}
export default CardRepository;
