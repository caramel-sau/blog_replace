import fetch from "node-fetch";

export async function getSortedPostsData() {
  // ファイルシステムのかわりに、
  // 外部の API エンドポイントから投稿データを取得する
  const res = await fetch("..");
  return res.json();
}
