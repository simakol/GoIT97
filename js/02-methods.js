/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],

  changeName(newName) {
    this.name = newName;
    console.log(`Назва успішно змінена. Нова назва: ${newName}`);
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
    console.log(`Рейтинг успішно змінено. Новий рейтинг: ${newRating}`);
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

/*
1. Своє значення this отримує під час виклику функції(якщо функція не була викликана, неможливо визначити значення this)
2. this - контекст виклику функції, це означає що this отримує своє значення під час виклику функції. І значенням this ЗАВЖДИ буде тей обʼєкт, який викликав цю функцію. (тей обʼєкт, який стоїть зліва від крапки)


*/

console.log(playlist.getTrackCount());

playlist.changeName("New playlist name");

playlist.addTrack("new track 1");
console.log(playlist.getTrackCount());

playlist.addTrack("new track 2");
console.log(playlist.getTrackCount());

playlist.updateRating(4);
console.log(playlist);
