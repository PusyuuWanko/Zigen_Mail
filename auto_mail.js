const nodemailer = require('nodemailer');

// メールを送信するためのSMTP設定
const transporter = nodemailer.createTransport({
  host: 'mailadd.local', // SMTPサーバーのホスト名
  port: 587, // ポート番号 (SMTPサーバーによって異なる場合があります)
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'youer mailadd', // SMTPアカウントのユーザー名
    pass: 'youer mailpass' // SMTPアカウントのパスワード
  }
});

// ユーザーが設定したメール内容をここで代入する例
const userScheduledMail = {
  from: 'youer mailadd', // 送信元メールアドレス
  to: 'yore to mailadd', // 送信先メールアドレス
  subject: '予め設定したメールの件名',
  text: '予め設定したメールの本文'
};

// 予め設定した日時
const scheduledDate = new Date('2023-11-04T10:00:00'); // 例: 2023年11月10日の8時に送信

// 現在の日時と予定日時の差を取得して、タイマーでメールを送信
const currentTime = new Date();
const timeDifference = scheduledDate.getTime() - currentTime.getTime();

if (timeDifference > 0) {
  console.log('メールは予定時刻まで待機中...');

  setTimeout(() => {
    transporter.sendMail(userScheduledMail, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('予め設定したメールを送信しました: ' + info.response);
      }
    });
  }, timeDifference);
} else {
  console.log('指定された日時は過去のため、メールは送信されません。');
}

