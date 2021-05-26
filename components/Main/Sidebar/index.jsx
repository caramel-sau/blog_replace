import Link from "next/link";
import { Title } from "./title";

export function Sidebar() {
  return (
    <aside className="lg:max-w-xs p-4">
      <div className="sidebar__items">
        <Title title="Profile" />
        <div className="p-10">
          <img
            src="https://placehold.jp/300x300.png"
            alt=""
            className="rounded-full"
          />
        </div>
        <p className="text-center text-lg mb-4">caramel</p>
        <p className="text-lg">
          Web制作を中心に活動しています。現在進行形で独学でスキルを習得中です。主にWordPressテーマの制作やカスタマイズなどをしています。
        </p>
        <ul className="sidebar__proflinks py-4">
          <li className="text-right">
            <Link href="#">
              <a className="text-blue-600 border-b border-blue-600">
                プロフィールの詳細
              </a>
            </Link>
          </li>
          <li className="text-right">
            <Link href="#">
              <a className="text-blue-600 border-b border-blue-600">
                お問い合わせ
              </a>
            </Link>
          </li>
          <li className="text-right">
            <Link href="#">
              <a className="text-blue-600 border-b border-blue-600">Twitter</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__items">
        <Title title="Archive" />
      </div>
      <div className="sidebar__items">
        <Title title="Search" />
      </div>
    </aside>
  );
}
