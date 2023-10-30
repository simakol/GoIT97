/*
Напиши скрипт перевірки підписки користувача при доступі до контенту.
- Існують три типи підписки: free, pro і vip.
- Доступ можуть отримати лише користувачі з підпискою pro і vip.

 */

// const sub = "vip";
// // let canAccessContent = false;

// // if (sub === "pro" || sub === "vip") {
// //   canAccessContent = true;
// // }

// const canAccessContent = sub === "pro" || sub === "vip";

// /*
// 1.
//     const sub = "free";
//     const canAccessContent = false || false; -> false
// 2.
//     const sub = "pro";
//     const canAccessContent = true || false; -> true
// 3.
//     const sub = "vip";
//     const canAccessContent = false || true; -> true
// */

// console.log("Can user access content: ", canAccessContent);

/*
Напиши скрипт, який перевіряє можливість відкриття чату з користувачем.
Для цього користувач повинен бути:
- другом
- онлайн
- без режиму "не турбувати"

 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Can user open chat? ", canOpenChat);
